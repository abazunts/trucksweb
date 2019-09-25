FROM keymetrics/pm2:latest-alpine

COPY . /app
WORKDIR /app
RUN npm install --quiet
RUN npm audit fix
RUN npm run build
CMD ["pm2-runtime", "ecosystem.config.js"]
