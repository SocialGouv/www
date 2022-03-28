FROM node:14-alpine as builder

COPY . .

RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean
RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx:sha-24c0fa3

## switch to non-root user
USER 101

ENV PORT=3000
ENV SKIP_ENVSUBST=1

COPY --from=builder --chown=nginx:nginx /out /usr/share/nginx/html
