FROM nginx:alpine

COPY ./out /www
COPY nginx.conf /etc/nginx/nginx.conf
