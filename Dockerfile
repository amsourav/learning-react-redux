FROM mhart/alpine-node:latest

WORKDIR /src

ADD . .

ENV NODE_ENV PRODUCTION

RUN yarn global add serve

RUN yarn install

RUN yarn build

EXPOSE 5000

ENTRYPOINT serve -s build

