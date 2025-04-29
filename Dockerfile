# Use Node.js official image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 8080

# Start the app
CMD ["node", "dist/main"]
