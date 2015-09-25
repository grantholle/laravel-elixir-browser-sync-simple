'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    _ = require('underscore'),
    Elixir = require('laravel-elixir'),
    config = Elixir.config,
    path = require('path');

Elixir.extend('browserSync', function (bsConfig) {

  bsConfig = _.extend({
    proxy: 'homestead.app',
    reloadOnRestart : true,
    notify: false,
    files: [
      path.join(config.appPath, '**/*.php'),
      path.join(config.publicPath, config.css.outputFolder, '**/*.css'),
      path.join(config.publicPath, config.js.outputFolder, '**/*.js'),
      'resources/views/**/*.php'
    ]
  }, bsConfig);

  browserSync.init(bsConfig);

  // Empty task since we've already initialized Browsersync
  new Elixir.Task('browser-sync', function () {}).watch();

});
