FROM node:20-alpine
RUN npm i -g nodemon
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
# CMD ["node", "dist/index.js"]
CMD ["npm", "run", "dev"]