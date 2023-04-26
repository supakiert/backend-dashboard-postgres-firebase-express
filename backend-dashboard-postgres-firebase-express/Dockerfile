FROM node:alpine3.17
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
COPY .env ./

# install git
RUN apk add git

RUN npm i
CMD ["npm", "run", "start"]