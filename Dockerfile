FROM node:22.4

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm build

CMD ["pnpm", "start"]