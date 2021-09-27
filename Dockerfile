FROM node:14-alpine as builder

COPY . .

RUN yarn --production --frozen-lockfile --prefer-offline && yarn cache clean
RUN yarn build
RUN yarn export

FROM ghcr.io/socialgouv/docker/nginx:6.52.0

COPY --from=builder /out /usr/share/nginx/html
