FROM composer

RUN apt-get update && \
    apt-get install -y \
        zlib1g-dev \
        libpq-dev \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && docker-php-ext-install zip

RUN composer install --prefer-source --no-interaction

ENTRYPOINT /bin/bash
CMD ["true"]