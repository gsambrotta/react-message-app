import express from "express";
import serveStatic from "serve-static";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import API from "data/messages.json";


export default (PORT) => {

  const MESSAGES_FILE = path.join(__dirname, API);  
  const app = express();

  app.use(serveStatic(__dirname + "/build"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(API);

  // Additional middleware which will set headers that we need on each request.
  app.use(function(req, res, next) {
      // Set permissive CORS header - this allows this server to be used only as
      // an API server in conjunction with something like webpack-dev-server.
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Disable caching so we'll always get the latest comments.
      res.setHeader('Cache-Control', 'no-cache');
      next();
  });

  app.get('/api/messages', function(req, res) {
    fs.readFile(MESSAGES_FILE, function(err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(JSON.parse(data));
    });
  });

  app.post('/api/messages', function(req, res) {
    fs.readFile(MESSAGES_FILE, function(err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      var messages = JSON.parse(data);

      var newMessage = {
        id: Date.now(),
        body: req.body.body,
        date: req.body.date,
        from: req.body.from,
        to: req.body.to
      };
      messages.push(newMessage);
      fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 4), function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        res.json(messages);
      });
    });
  });

  app.listen(PORT, function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log('Listening at' + PORT );
  });
}