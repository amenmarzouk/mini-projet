

FROM node:20.17.0-alpine

WORKDIR /app

COPY . .


RUN npm install

EXPOSE 8020

CMD ["npm", "start"]
