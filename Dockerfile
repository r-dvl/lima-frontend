FROM node:14-alpine

WORKDIR /app

# To override ENV var in react this is the workaround
ARG API_URL

ENV REACT_APP_API_URL $API_URL

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]