FROM node:18-alpine

WORKDIR /usr/src/app
COPY . .

RUN yarn install
RUN yarn build
#CMD ["yarn", "build"]