FROM node:20-alpine

# Set working directory
WORKDIR /app
# Copy both package.json and package-lock.json for proper dependency install
COPY package*.json ./
RUN npm install

# Copy remaining source files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
