FROM node:20-alpine

USER node

WORKDIR /home/node/arch-wiki

RUN mkdir -p "/home/node/arch-wiki/docs"

COPY --chown=node:node package*.json ./

RUN npm ci --omit=dev

CMD ["npm", "run", "docs:dev"]