# Use Node.js as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files (including index.html)
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Command to run the app (start server)
CMD ["node", "app.js"]
