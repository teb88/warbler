FROM node:10-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./package.json .

RUN npm install

COPY . .

ARG BASE_URL

ENV SERVE_PORT 3000

RUN REACT_APP_BASE_URL=${BASE_URL} npm run build && npm i -g serve

CMD serve -s build -l ${SERVE_PORT}