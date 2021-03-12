# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:14.15-slim

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

ADD package.json /usr/src/app/package.json

# Installs all node packages
RUN npm install

RUN npm install react-script@1.1.0 -g

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start" ]
