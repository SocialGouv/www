FROM docker.pkg.github.com/socialgouv/docker/nginx4spa:4.6.1

COPY ./out /usr/share/nginx/html
