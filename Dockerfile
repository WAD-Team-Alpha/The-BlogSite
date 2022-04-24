# Process - 1
FROM node:16 as build-stage
WORKDIR /The-BlogSite
COPY package.json .
RUN npm install
COPY . .
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
RUN npm run build
# Process - 2
FROM nginx:1.17.0-alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /The-BlogSite/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT
ENTRYPOINT ["nginx", "-g", "daemon off;"]