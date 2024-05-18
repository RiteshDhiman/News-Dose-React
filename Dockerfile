FROM node:18-alpine
WORKDIR /news-app/
COPY public/ /news-app/public
COPY src/ /news-app/src
COPY package.json /news-app/
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
RUN npm run test
EXPOSE 8000
CMD ["npm","start"]