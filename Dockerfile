

FROM node:20.17.0-alpine

WORKDIR /app

COPY . .


RUN npm install


RUN npm run build

EXPOSE 8000

CMD ["npm", "start"]
