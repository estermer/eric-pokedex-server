
# Eric-Pokedex-Server
My first server based app using Node.JS, Express, Handlebars, and all 4 HTTP routes

![https://ericpokedexserver.herokuapp.com/](Click here to view the functioning APP.)

*** Credit for setting up some intial node_modules and files goes to Matt Brendzel of General Assembly ***
*** and for designing this challenge ***


[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : POKÉDEXpress Mini-Project

## Setup

  Make sure that you are on the `master` branch of your `wdi-remote-r2d2` repo.
  Then run `git pull upstream master` to pull the latest materials from the
  instructors' repository. You shouldn't hit a merge conflict here, but if you do,
  flag down an instructor right away.

  Next, navigate to the directory for today, go into the `homework` directory, and
  run `npm install` -- this will download any assignment-specific JavaScript
  dependencies into to a directory called `node_modules`.

## Instructions

  In the Pokémon games, a Pokédex (POKÉmon inDEX) is a tool your character
  carries around -- it provides information about the different Pokémon that you
  encounter during the game.

  ![Pokédex](https://i.ytimg.com/vi/HMsg12IaFBI/maxresdefault.jpg)

  For this assignment, you will be creating an Express-based Pokédex app.
  You will have several days to complete this assignment, so use your time
  wisely.

  > We have not yet covered all of the material needed to complete this
  > assignment -- some of it will be covered tomorrow, and some of it we're
  > expecting you to learn about on your own -- so don't be discouraged
  > if you're not sure how to do something.

  As you work through this assignment, please make commits regularly -- few things are as
  heartbreaking as losing your work.

### Feature Specs

  ```markdown
  1.  When a user visits `/`,
    1.1.   they should see the site's home page.
      1.1.1.  a link to the Pokémon index (`/pokemon`).
  2.  When a user visits `/pokemon`,
    2.1.  they should see a list of Pokémon (i.e. the 'index' view), comprised of
          each Pokémon's name and "National Pokédex Number" (or NPN).
    2.2.  if they click on a Pokémon's entry in the index,
      2.2.1.   they should be directed to the page for that Pokémon (i.e. the 'show' view).
  3.  When a user visits `/pokemon/new`,
    3.1. they should see an empty form for creating a new Pokémon in the index.
    3.2. if they complete the form and submit it,
      3.2.1.   and the NPN given in the form is not available,
        3.2.1.1.  no new Pokémon is created.
        3.2.1.2.  the user is redirected back to `/pokemon/new`.
      3.2.2.  and the NPN given in the form is available,
        3.2.2.1.  a new Pokémon is created and added to the index.
        3.2.2.2.  the user is redirected to `/pokemon`.
  4.  When a user visits `/pokemon/:npn`
    4.1.  they should see a page showing the details of that Pokémon (i.e. name,
          NPN, region, types, description)
  5.  When a user visits `/pokemon/:npn/edit`
    5.1.  they should see a large form, filled in with the current details of
          the chosen Pokémon (i.e. name, NPN, region, types, description), and a
          small form with a single button in it (which says 'Delete Listing').
    5.2.  if they alter the values in the large form and submit that form via
          the button labelled 'Update Listing',
      5.2.1.  and the NPN has been changed to a value that is not available
        5.2.2.1. the user is redirected back to `/pokemon/:npn/edit`.
      5.2.2.  and the NPN has not been changed, or has been changed to a value
        that is available
        5.2.2.1. the Pokémon's entry in the index is updated.
        5.2.2.2. the user is redirected to `/pokemon/:npn`.
    5.3.  if they click the 'Delete Listing' button in the small form,
      5.3.1.  the listing for that Pokémon gets destroyed.
      5.3.2.  the user is redirected to `/pokemon`.
  ```

### Views

  A layout and a homepage view have been provided for you, but all other views
  must be created by you. Several example HTML files have been provided as
  references for you; they can be found in the `spec` directory.

### Helpers

  In order to make your forms work, you will need to use `<select>` elements.
  Handlebars doesn't have tools to work with `<select>` out of the box, so
  another Node module (called `handlebars-form-helpers`) will need to be
  used. In addition, a few other Node modules, such as `method-override`
  (for making it so that your forms can submit PATCH or DELETE requests) and
  `body-parser` (for reading form data) will be needed in order for your app to
  work correctly. These modules have already been configured to work with
  Express, but you'll still need to figure out how to use them. Links to
  documentation for these modules can be found below.

  [handlebars-form-helpers](https://github.com/badsyntax/handlebars-form-helpers).

  [method-override](https://github.com/expressjs/method-override)

  [body-parser](https://github.com/expressjs/body-parser)

### Data

  A data store has been provided for you in the `lib` directory. However, unlike
  the previous assignments, where your data store has been an array, this time
  your data store is the whole module; all data is hidden away inside the
  module, and is accessible only through the exported methods:

| Method Signature              | Return Value                                      |
|:-----------------------------:|:-------------------------------------------------:|
| `getAllPokemon()`             | A copy of the entire array of Pokémon.            |
| `getOnePokemon(npn)`          | A copy of a single Pokémon object from the store. |
| `createPokemon(pokemonAttrs)` | `true` if successful, `false` otherwise           |
| `updatePokemon(pokemonAttrs)` | `true` if successful, `false` otherwise           |
| `destroyPokemon(npn)`         | Nothing returned                                  |

  > `npn` must be a number. `pokemonAttrs` must be an object containing the
  > attributes you wish to give the Pokémon you are creating/modifying.

  There are also two helper methods, `getTypes()` and `getRegions()`, to make
  working with the Handlebars form helpers (above) a little easier. Take a look
  [inside the data store](./lib/data-store.js) to see what they return.

### Reach Targets

1.  Modify the app so that the 'show' view also shows an image of the given
    Pokemon (a whole bunch of images are available at
    `http://img.pokemondb.net/artwork/(Pokémon's name).jpg`).
    Feel free to modify the data store as necessary in order to make that work.

2.  Add a search bar to the 'index' view, so that users can search for Pokémon
    by a partial match of their name.

And, as always, feel free to customize this app by adding styling/animations.

## Submitting Your Work

When you're ready, push the code to your fork on GitHub and create an issue with
a title in the format "YourGitHubUsername -- Week XX Day XX".
The issue body should have:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)
