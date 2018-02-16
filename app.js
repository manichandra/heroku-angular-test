const express = require('express');
const http = require('http');
const path = require('path');

//const api = require('./server/routes/api');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, function(){console.log('Running')});


/*

npm install enhanced-resolve@3.3.0 --save-dev

//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

*/
