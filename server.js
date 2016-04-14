var apiServer = require('./json-api-server');
var webpackServer = require('./webpack-server');

const PORT = process.env.PORT || 4001;
const PROD = process.env.NODE_ENV === 'production';

if (PROD) {
  apiServer(PORT);
} else {
  apiServer(PORT - 1);
  webpackServer(PORT);
}
