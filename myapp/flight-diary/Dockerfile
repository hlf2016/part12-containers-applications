FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci && npm run tsc

ENV DEBUG=flight-diary-backend:*

USER node

CMD ["npm", "start"]
