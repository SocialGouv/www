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
RUN yarn install --frozen-lockfile --ignore-scripts

# Rebuild the source code only when needed
FROM node:16-alpine3.18 AS builder

ENV NODE_ENV production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production image, copy all the files and run next
FROM ghcr.io/socialgouv/docker/nginx:sha-1d70757 AS runner

USER 101

COPY --from=builder /app/out /usr/share/nginx/html

# Disable nextjs telemetry
ENV NEXT_TELEMETRY_DISABLED 1
