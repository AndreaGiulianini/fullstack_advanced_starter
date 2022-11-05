FROM node:19

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

CMD [ "npm", "run", "dev"]