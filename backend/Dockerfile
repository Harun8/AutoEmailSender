FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls -al /app


EXPOSE 3000
EXPOSE 80


CMD ["npm", "run", "start"]
