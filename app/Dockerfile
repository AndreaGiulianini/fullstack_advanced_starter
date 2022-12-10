FROM node:19

WORKDIR /app
COPY . .
RUN npm ci --force
RUN npm run build

CMD [ "npm", "run", "dev"]