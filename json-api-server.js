var express = require('express');
var serveStatic = require('serve-static');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');


module.exports = (PORT) => {

  const MESSAGES_FILE = path.join(__dirname, 'src/app/data/messages.json');
  const PEOPLE_FILE = path.join(__dirname, 'src/app/data/people.json');
  const app = express();

  app.use(serveStatic(__dirname + '/build'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // Additional middleware which will set headers that we need on each request.
  app.use(function(req, res, next) {
      // Set permissive CORS header - this allows this server to be used only as
      // an API server in conjunction with something like webpack-dev-server.
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Disable caching so we'll always get the latest comments.
      res.setHeader('Cache-Control', 'no-cache');
      next();
  });

  app.get('/messages', function(req, res) {
    fs.readFile(MESSAGES_FILE, function(err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(JSON.parse(data));
    });
  });

  app.post('/messages', function(req, res) {
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

  app.get('/people', function(req, res) {
    fs.readFile(PEOPLE_FILE, function(err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(JSON.parse(data));
    });
  });

  app.post('/people', function(req, res) {
    fs.readFile(PEOPLE_FILE, function(err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      var people = JSON.parse(data);

      var newPerson = {
        id: Date.now(),
        name: req.body.name,
        surname: req.body.surname,
        nickname: req.body.nickname,
        pic: req.body.pic
      };
      people.push(newPerson);
      fs.writeFile(PEOPLE_FILE, JSON.stringify(people, null, 4), function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        res.json(people);
      });
    });
  });

  app.listen(PORT, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Listening at ' + PORT );
  });
}
