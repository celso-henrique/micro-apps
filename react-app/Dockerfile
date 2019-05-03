# build environment
FROM node:10.15.3-alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install --silent
COPY . .
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
