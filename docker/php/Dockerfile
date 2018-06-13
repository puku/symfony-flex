FROM php:7-fpm

RUN apt-get update && apt-get install -y \
        zlib1g-dev \
        libpq-dev \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && docker-php-ext-install zip
