FROM node:12.13

WORKDIR /service

COPY ./package.json ./package.json
COPY prisma prisma

RUN yarn --production=true
RUN yarn global add prisma
RUN yarn global add nodemon

RUN yarn run prisma:deploy

COPY . .

RUN yarn start

EXPOSE 4000