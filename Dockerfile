FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.16.0

COPY ./out /usr/share/nginx/html
