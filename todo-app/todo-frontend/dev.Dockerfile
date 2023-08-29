FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV REACT_APP_BACKEND_URL=http://localhost:8081/api
ENV WDS_SOCKET_PORT=8081

CMD ["npm", "start"]
