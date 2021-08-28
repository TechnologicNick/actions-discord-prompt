FROM node:16.8.0
ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN yarn install --production

CMD [ "node", "/app/index.js" ]
