const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
var apiProxy = httpProxy.createProxyServer();

app.all("/api/*", function(req, res){ 
    apiProxy.web(req, res, { target: 'http://shahina-backend:8080' });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);