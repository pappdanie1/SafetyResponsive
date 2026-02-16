FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

COPY --from=build /app/cookie-banner /usr/share/nginx/html/cookie-banner

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# build: docker build -t pappdanie1/papp-zsolt:latest .
# test: docker run -p 80:80 pappdanie1/papp-zsolt:latest
# push: docker push pappdanie1/papp-zsolt:latest