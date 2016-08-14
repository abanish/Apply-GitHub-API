// server.js
    var express = require('express')
    var app = express()                          // create app w/ express
    var bodyParser = require('body-parser')    // pull information from HTML POST (express4)
    var methodOverride = require('method-override') // simulate DELETE and PUT (express4)

    app.use(express.static(__dirname + '/public'))            // set the static files location /public/img will be /img for users
    app.use(bodyParser.urlencoded({'extended': 'true'}))       // parse application/x-www-form-urlencoded
    app.use(bodyParser.json())                                  // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }))  // parse application/vnd.api+json as json
    app.use(methodOverride())

    app.set('views', __dirname + '/server/views')   //set views director as /server/views

    app.set('view engine', 'jade')        //jade view engine

    app.get('/', function(req, res){      //render index for all requests
    res.render('index')
    })

    // listen (start app with node server.js) dynamic port with heroku.
    app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
