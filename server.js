  var   express = require('express'),
       app = express(),
       bodyParser = require('body-parser'),
       cors = require('cors'),
       mongoose = require('mongoose'),
       port = process.env.PORT || 9285,
       mongoUri = 'mongodb://drinkpoint1:drinkpoint1@dbh30.mlab.com:27307/heroku_m4k4q6ww',
       router = express.Router(),
       appRoutes = require('./serverResources/routes/appRoutes.js');

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(__dirname + '/public'));

  app.use('/api', router);

  router.route('/questions')
  .post(appRoutes.postQuestion)
  .get(appRoutes.getQuestions);

  mongoose.connect(mongoUri);
  mongoose.connection.once('open', function() {
      console.log('Connected to MongoDB at ' + mongoUri);
  });


  app.listen(port, function() {
      console.log('Listening on ' + port);
  });
