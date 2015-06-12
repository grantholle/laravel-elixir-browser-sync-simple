'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    _ = require('underscore'),
    elixir = require('laravel-elixir'),
    config = elixir.config,
    path = require('path');

elixir.extend('browserSync', function (bsConfig) {

  bsConfig = _.extend({
    proxy: 'homestead.app',
    reloadOnRestart : true,
    notify: false,
    files: [
      path.join(config.srcDir, '**/*.php'),
      path.join(config.cssOutput, '**/*.css'),
      path.join(config.jsOutput, '**/*.js'),
      'resources/views/**/*.*'
    ]
  }, bsConfig);

  gulp.task('browser-sync', function () {
    // Only trigger if it's not active and the watch task is running
    if (!browserSync.active && typeof gulp.tasks.watch.done !== 'undefined')
      browserSync.init(bsConfig);
  });

  this.registerWatcher('browser-sync');
  return this.queueTask('browser-sync');

});
