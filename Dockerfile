FROM node:20-alpine

USER node

WORKDIR /home/node/arch-wiki

COPY --chown=node:node package*.json ./

RUN npm ci --omit=dev

COPY --chown=node:node . .

CMD ["npm", "run", "docs:dev"]