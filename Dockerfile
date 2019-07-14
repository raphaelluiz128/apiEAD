FROM node:alpine
# aaa
WORKDIR /usr/app

COPY package*.json ./
RUN npm install --quiet

RUN npm install nodemon -g --quiet
COPY . .

EXPOSE 3200
CMD nodemon -L --watch . index.js