var express = require('express');
var router = express.Router();
var DS = require('../lib/data-store.js')

/*LIST OF POKEMON*/
router.get('/', function(request, response){

  response.render('index', {
    pokemonList: DS.getAllPokemon().sort(DS.compare)
    //pass all pokemon in DS to pokemonList in index.hbs
    //created compare method to sort the order of pokemon by npn
  });
});

/*CREATE POKEMON*/
router.post('/', function(request, response){
  var newPokemon = {
    npn: Number(request.body.npn),
    name: request.body.name,
    region: request.body.region,
    typeOne: request.body.typeOne,
    typeTwo: request.body.typeTwo,
    description: request.body.description
  };

  DS.createPokemon(newPokemon);
  response.redirect('/pokemon');
});

/*SEARCH POKEMON*/
router.post('/search', function(request, response){
  var searchTerm = request.body.search;
  var npn = DS.getPokemonNPN(searchTerm);
  response.redirect('/pokemon/' + npn);
});


/*NEW POKEMON FORM*/
router.get('/new', function(request, response){
  response.render('new');
});

/*INDIVIDUAL POKEMON*/
router.get('/:npn', function(request, response){

  var npn = Number(request.params.npn);
  var pokemon = DS.getOnePokemon(npn);

  response.render('show', {
    //passing the info from a single pokemon to show.hbs
    npn: npn,
    name: pokemon.name,
    imageUrl: 'http://img.pokemondb.net/artwork/' + pokemon.name.toLowerCase() + '.jpg',
    region: pokemon.region,
    typeOne: pokemon.typeOne,
    typeTwo: pokemon.typeTwo,
    description: pokemon.description
  });
});

/*EDIT POKEMON FORM*/
router.get('/:npn/edit', function(request, response){
  var npn = Number(request.params.npn);
  var pokemon = DS.getOnePokemon(npn);

  response.render('edit',{
    npn: npn,
    name: pokemon.name,
    region: pokemon.region,
    typeOne: pokemon.typeOne,
    typeTwo: pokemon.typeTwo,
    description: pokemon.description
  });
});

/*EDIT POKEMON DATA*/
router.put('/:npn', function(request, response){
  var updatedPokemon = {
    npn: Number(request.body.npn),
    name: request.body.name,
    region: request.body.region,
    typeOne: request.body.typeOne,
    typeTwo: request.body.typeTwo,
    description: request.body.description
  };

  DS.updatePokemon(Number(request.body.npn), updatedPokemon);
  response.redirect('/pokemon/' + request.body.npn);
});

/*DELETE POKEMON DATA*/
router.delete('/:npn', function(request, response){
  DS.destroyPokemon(Number(request.params.npn));
  response.redirect('/pokemon');
});

module.exports = router;
