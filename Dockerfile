FROM node:lts-hydrogen AS base

WORKDIR /app

COPY . .

## DEV STEP
FROM base AS development

RUN yarn install

EXPOSE 3333

CMD ["yarn", "dev"]

## PRODUCTION STEP BUILD
FROM base AS production

ENV NODE_ENV=production

RUN yarn install

RUN yarn build

EXPOSE 3333

CMD ["yarn", "start"]

