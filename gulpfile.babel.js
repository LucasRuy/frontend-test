'use strict';

import gulp from 'gulp';
import require_dir from 'require-dir';

export const directories = {
  app: {
    images: './app/static/images/*',
    templates: 'app/static/templates/**/*.pug',
    stylesheets: 'app/static/stylesheets/application.styl',
    javascripts: 'app/src/app.js',
    json: 'app/src/json/*.json'
  },
  public: {
    images: './public/images',
    templates: './public/',
    stylesheets: './public/stylesheets',
    javascripts: './public/javascripts'
  }
};

require_dir('./gulp_tasks');

gulp.task('default', ['pug', 'stylus', 'images', 'javascripts', 'browserSync', 'watch']);