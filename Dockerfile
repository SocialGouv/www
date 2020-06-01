FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.21.23

COPY ./out /usr/share/nginx/html
