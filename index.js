let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

let port = process.env.PORT || 5000;

let http = require('http').createServer(app).listen(port);
