FROM node:18-alpine
RUN npm install -g npm@latest

WORKDIR /app
RUN npm init -y && \
    npm install express --save
COPY ./app .
EXPOSE 3000

RUN ls -la
ENV PORT 3000
RUN ls -la 
CMD ["node", "index.js"]
