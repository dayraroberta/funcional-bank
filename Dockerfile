FROM node:12-alpine

MAINTAINER Dayra Roberta

RUN mkdir /app/

WORKDIR /app/

COPY ./src /app/

RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
