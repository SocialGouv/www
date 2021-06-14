FROM ghcr.io/socialgouv/docker/nginx4spa:6.11.1

COPY ./out /usr/share/nginx/html
