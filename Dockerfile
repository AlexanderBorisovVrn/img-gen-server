FROM node:16 
WORKDIR /usr/src/server
COPY package*.json ./
RUN npm install --include=dev
COPY . ./built/index.js
CMD [ "node","start" ]