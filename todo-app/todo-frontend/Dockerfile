FROM node:16 AS base

WORKDIR /usr/src/app

COPY . .

FROM base as test 

RUN npm ci

RUN CI=true npm test

FROM base as prod

RUN npm ci --production

ENV REACT_APP_BACKEND_URL=http://localhost:3000

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=prod /usr/src/app/build /usr/share/nginx/html


