FROM node:13 as builder

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn --frozen-lockfile

COPY ./next.config.js /app/next.config.js
COPY ./pages /app/pages
COPY ./src /app/src
COPY ./static /app/static

RUN yarn build

COPY ./scripts /app/scripts

RUN yarn rss

#

FROM nginx:alpine

COPY --from=builder /app/out /www
COPY nginx.conf /etc/nginx/nginx.conf
