FROM node:21

WORKDIR /home/node
COPY package.json ./
RUN npm i && npm cache clean --force
ENV PATH /home/node/node_modules/.bin:$PATH
WORKDIR /home/node/app
COPY ./ ./

CMD [ "npm", "run", "dev"]