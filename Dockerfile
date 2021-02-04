FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:4.3.1

COPY ./out /usr/share/nginx/html
