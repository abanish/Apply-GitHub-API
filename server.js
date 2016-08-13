// server.js

    // set up ========================
    var express = require('express')
    var app = express()                          // create app w/ express
    var bodyParser = require('body-parser')    // pull information from HTML POST (express4)
    var methodOverride = require('method-override') // simulate DELETE and PUT (express4)

    app.use(express.static(__dirname + '/public'))            // set the static files location /public/img will be /img for users
    app.use(bodyParser.urlencoded({'extended': 'true'}))       // parse application/x-www-form-urlencoded
    app.use(bodyParser.json())                                  // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }))  // parse application/vnd.api+json as json
    app.use(methodOverride())

    app.set('views', __dirname + '/server/views')

    app.set('view engine', 'jade')

    app.get('/', function(req, res){
    res.render('index')
    })

    // listen (start app with node server.js)
    app.listen(8080)
    console.log('App listening on port 8080')
