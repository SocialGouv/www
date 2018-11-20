FROM node:11 as builder

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

COPY nginx.conf /app/out /usr/share/nginx/html
COPY --from=builder /app/out /usr/share/nginx/html
