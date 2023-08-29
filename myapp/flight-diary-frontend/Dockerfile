FROM node:16 as build_stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci && npm run build

FROM nginx:1.20-alpine

COPY --from=build_stage /usr/src/app/build /usr/share/nginx/html
