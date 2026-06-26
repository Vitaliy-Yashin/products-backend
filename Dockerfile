FROM node:20-alpine

WORKDIR /app

RUN adduser -D -u 1021 backenduser

COPY package*json .

RUN npm install --production

COPY . .

RUN chown -R backenduser:backenduser /app

EXPOSE 5000

USER backenduser

#HEALTHCHECK --interval=30s --timeout=2s --start-period=5s --retries=3 \ 
  #CMD node -e "require('http').get('http://localhost:5000/health', (r) => {process.exit(r.statucCode === 200 ? 0 : 1)})"

ENTRYPOINT [ "node" ]
CMD [ "index.js" ]  
