# src/Dockerfile
FROM node:20-alpine AS base
WORKDIR /app

# Kopiujemy pliki manifestu osobno, aby wykorzystać buforowanie warstw Dockera
COPY package*.json ./

# Instalujemy zależności (w środowisku deweloperskim w kontenerze)
RUN npm install

# Kopiujemy resztę kodu źródłowego (wykluczając elementy z .dockerignore)
COPY . .

# Port domyślny dla serwera deweloperskiego Astro
EXPOSE 4321

# Bindujemy serwer do 0.0.0.0, aby umożliwić mapowanie portów poza kontener
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]