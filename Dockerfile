FROM node:15.12.0
ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN yarn install --production

CMD [ "node", "/app/index.js" ]
