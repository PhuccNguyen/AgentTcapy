# backend/Dockerfile

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies first (caching)
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Expose port
EXPOSE 5000

# Run the backend app
CMD ["node", "src/index.js"]
