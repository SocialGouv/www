# ARG NODE_VERSION=16-alpine3.18@sha256:82bcf77a5de631c6b19f4449ccec82bfbb7d8f6c94d6ae3bdf760ed67e080cb1

# Install dependencies only when needed
FROM node:16-alpine3.18 AS base
RUN apk add --no-cache libc6-compat=1.2.4-r1
WORKDIR /app
COPY package.json yarn.lock ./

# Keep yarn install cache when bumping version and dependencies still the sames
RUN node -e " \
  const package = JSON.parse(fs.readFileSync('/app/package.json')); \
  const packageZero = { ...package, version: '0.0.0' };  \
  fs.writeFileSync('/app/package.json', JSON.stringify(packageZero));"

FROM node:16-alpine3.18 as deps
WORKDIR /app
COPY --from=base /app/package.json /app/yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine3.18 AS builder

ARG PRODUCTION
ENV PRODUCTION $PRODUCTION
ARG COMMIT_SHA
ENV COMMIT_SHA $COMMIT_SHA
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL $NEXT_PUBLIC_SITE_URL

ENV NODE_ENV production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# RUN if [ -z "$PRODUCTION" ]; then \
#   echo "Overriding .env for staging"; \
#   cp .env.staging .env.production; \
#   fi && \
#   yarn build:export 
RUN yarn build

# Production image, copy all the files and run next
FROM ghcr.io/socialgouv/docker/nginx:sha-1d70757 AS runner

USER 101

COPY --from=builder /app/out /usr/share/nginx/html

# Disable nextjs telemetry
ENV NEXT_TELEMETRY_DISABLED 1
