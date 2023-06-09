FROM node:18.14.2-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --omit=dev

COPY ./src ./src

CMD npm start