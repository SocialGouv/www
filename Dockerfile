FROM node:14-alpine as builder

WORKDIR /app

COPY yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn fetch --immutable && yarn cache clean

COPY . .
RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx:8.2.0

COPY --from=builder --chown=nginx:nginx /app/out /usr/share/nginx/html
