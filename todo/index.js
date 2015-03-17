require('./index.css');

window.jQuery = require('jquery'); // for backbone
var Backbone = require('backbone');
var app = require('./views/app');
var Router = require('./routers/router');

new Router();
Backbone.history.start();

new app();
