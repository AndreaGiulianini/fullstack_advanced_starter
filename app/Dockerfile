FROM node:19

WORKDIR /home/node
COPY package.json ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /home/node/node_modules/.bin:$PATH
WORKDIR /home/node/app

CMD [ "npm", "run", "dev"]