FROM node:22-alpine

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
