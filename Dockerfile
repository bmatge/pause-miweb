FROM node:20-alpine

WORKDIR /app

# Copy package files and install
COPY server/package.json server/package-lock.json* ./server/
RUN cd server && npm install --production

# Copy app files
COPY server/ ./server/
COPY public/ ./public/
COPY js/ ./js/
COPY css/ ./css/

# The original solo mode
COPY index.html ./index.html

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server/index.js"]
