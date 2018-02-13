import gulp from 'gulp';
import requireDir from 'require-dir';

export const directories = {
  app: {
    images: './app/static/images/*',
    templates: 'app/static/templates/index.pug',
    stylesheets: 'app/static/stylesheets/application.styl',
    javascripts: 'app/src/app.js',
    json: 'app/src/json/*.json',
  },
  public: {
    images: './public/images',
    templates: './public/',
    stylesheets: './public/stylesheets',
    javascripts: './public/javascripts',
  },
};

requireDir('./gulp_tasks');

gulp.task('default', ['pug', 'stylus', 'images', 'javascripts', 'browserSync', 'watch']);
