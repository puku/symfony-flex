FROM php:7-fpm

RUN apt-get update && apt-get install -y --no-install-recommends \
        zlib1g-dev \
        libpq-dev \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && docker-php-ext-install zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer