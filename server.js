var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;


  var title = 'VCS Elasticsearch Tabify API Server';

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routes = require('./api/routes/mainRoute'); 
  routes(app); 

//Default Error Handling
  app.use((req, res, next) => {
    console.log("%s:  Invalid request (404) from: %s", new Date() , req.connection.remoteAddress);
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
  });
  app.use((error, req, res, next) => {
    console.log("%s:  Internal Server Error (500) processing request from: %s", new Date() , req.connection.remoteAddress);
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });

//app.listen(port);
  const server = app.listen(port, (error) => {
    if (error) return console.log('Error starting %s:%s', title, error);

    console.log('%s listening on port %s', title,  port);
  });
