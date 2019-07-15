FROM node:alpine
# aaa
WORKDIR /usr/app

COPY package*.json ./
RUN npm install --quiet


COPY . .

EXPOSE 3200
CMD npm start