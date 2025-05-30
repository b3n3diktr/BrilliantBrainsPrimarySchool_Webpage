FROM node:22-slim

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 81

CMD ["serve", "-s", "dist", "-l", "81"]