FROM node:18

WORKDIR /api
COPY . .
RUN npm ci

CMD [ "npm", "run", "start:debug"]