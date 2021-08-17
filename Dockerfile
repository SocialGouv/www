FROM ghcr.io/socialgouv/docker/nginx:6.41.0

COPY ./out /usr/share/nginx/html
