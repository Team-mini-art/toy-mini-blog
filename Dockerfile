# build stage
FROM node:18 as build-stage
WORKDIR /app
COPY package*.json ./

# Yarn is already installed
RUN yarn install
COPY . .
RUN yarn build

RUN echo "PATH Check01"
RUN ls
RUN pwd

RUN echo "PATH Check02"
RUN ls /app
RUN pwd

RUN echo "PATH Check03"
RUN ls /app/dist
RUN pwd

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# copy the custom nginx configuration file (if you have one)
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
