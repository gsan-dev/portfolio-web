FROM nginx:1.27-alpine

RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY robots.txt /usr/share/nginx/html/robots.txt
COPY assets/ /usr/share/nginx/html/assets/
COPY dist/ /usr/share/nginx/html/dist/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s CMD wget -q -O- http://localhost/ >/dev/null || exit 1
