FROM node:12-alpine

WORKDIR /app

RUN chown node:node /app

COPY . .

RUN yarn --frozen-lockfile
RUN yarn build

ENV NODE_ENV=production

ENTRYPOINT ["yarn", "run", "build-start"]
