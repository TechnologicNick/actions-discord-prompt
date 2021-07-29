FROM node:15.12.0
ENV NODE_ENV=production

COPY . .

RUN yarn install --production

CMD [ "node", "index.js" ]
