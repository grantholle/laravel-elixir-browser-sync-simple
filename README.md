# laravel-elixir-browser-sync-simple

> Because laravel-elixir-browser-sync was already taken.

## Installation

### Elixir 2

Use version 1:
```
npm i laravel-elixir-browser-sync-simple@1 --save-dev
```

### Elixir 3

```
npm i laravel-elixir-browser-sync-simple --save-dev
```

This is a simple implementation of [Browsersync](http://www.browsersync.io/) using [Laravel Elixir](http://laravel.com/docs/elixir). Browsersync already has a very powerful API, which only needs a little love to get working with Elixir. Simply pass in an object of [options](http://www.browsersync.io/docs/options/) (or nothing at all to use sensible defaults while proxying `homestead`) and enjoy the bliss of never having to press <kbd>⌘</kbd> + <kbd>R</kbd> again, in addition to all the other amazing features packed into Browsersync.

:thumbsup:

## Usage

Slap this in `gulpfile.js`, along with your other Elixir necessities:

```JavaScript
var elixir = require('laravel-elixir');

require('laravel-elixir-browser-sync-simple');

elixir(function(mix) {
  mix.sass('app.sass')
    .browserSync({
      proxy: 'local.dev',
      ...
    });
});
```

Then run `$ gulp watch` to watch assets and reload the browser.

This automatically watches your compiled css directory, js directory, `app` directories as defined in your `elixir.json` or `Config.js`, and `resources/views` directories for changes. If you wish to change these, pass in a `files` [object](http://www.browsersync.io/docs/options/#option-files).
