FROM node:18.0.0-alpine3.15

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY ./ ./
CMD chmod +x /app/entrypoint.sh && /app/entrypoint.sh
