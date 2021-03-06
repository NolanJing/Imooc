var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware'); // This line
var config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler)); // And this line
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000);