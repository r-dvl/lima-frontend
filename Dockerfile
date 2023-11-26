FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

RUN npm install -g serve

ENV API_URL = 'http://localhost:3001'

EXPOSE 3000

CMD ["serve", "-s", "build"]