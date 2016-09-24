// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

// Data Store
var DS = require(`./lib/data-store.js`);

// Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// Express + Handlebars
var hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', './views');
require('handlebars-form-helpers').register(hbs.handlebars);
// Controllers
var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);
/// DO NOT EDIT ABOVE THIS LINE ///

/*HOME*/
app.get('/', function(request, response){
  response.render('home');
});

/***********SERVER LISTENING***************/
/// DO NOT EDIT BELOW THIS LINE ///
module.exports = app;
/******************************************/
