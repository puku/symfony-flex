require('../css/app.scss');

// loads the jquery package from node_modules
const $ = require('jquery');

const greet = require('./greet');

$(document).ready(function() {
    $('body').prepend('<h1>'+greet('john')+'</h1>');
});