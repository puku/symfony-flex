Symfony Educational Application
========================

This repository was created to start learning symfony in advance. 


[![Build Status](https://travis-ci.org/puku/symfony-flex.svg?branch=master)](https://travis-ci.org/puku/symfony-flex)
[![Maintainability](https://api.codeclimate.com/v1/badges/9e331840609363f66fe1/maintainability)](https://codeclimate.com/github/puku/symfony-flex/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9e331840609363f66fe1/test_coverage)](https://codeclimate.com/github/puku/symfony-flex/test_coverage)

Usage
-----

This repository contain [`docker-compose`][1] file to run web-server environment.

You can other tools you like (e.g. LAMP, virtual machine, php built-in server, etc.) to run web-server.
I don't provide description for other environments rather the `docker-compose`, because they are very different.

If you want to use `Docker` you can follow next steps to run the application.

I assume that you have already installed and configured `Docker`.

By default docker files configured to use `symfony.test` domain in your browser.
If you want to use different one, you should modify `docker/etc/nginx/app.conf` file
and change `server_name` section there.

To run application, you should execute following commands:

```bash
$ cd docker-compose
$ docker-compose build
$ docker-compose up -d
```

Next step is to update system`hosts` file. You should add new line there with `docker-machine` ip address and domain, that you want to use.
Here is example of the line you should add:

```
127.0.0.1 symfony.test
```


Tests
-----

To run tests you should connect to the `symfony-php` Docker container and run following command:

```bash
$ ./vendor/bin/simple-phpunit
```

[1]: https://docker.com
