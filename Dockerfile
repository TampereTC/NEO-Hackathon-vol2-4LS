FROM node:6.9.2
COPY package*.json ./

RUN npm config set https-proxy http://10.144.1.10:8080
RUN npm config set proxy http://10.144.1.10:8080
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD node server.js
