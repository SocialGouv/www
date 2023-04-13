FROM node:14-alpine as builder

COPY . .

RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean
RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx:7.3.1

COPY --from=builder --chown=nginx:nginx /out /usr/share/nginx/html
