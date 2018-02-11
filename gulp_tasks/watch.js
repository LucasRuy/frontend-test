'use strict';

import gulp from 'gulp';

gulp.task('watch', () => {
	gulp.watch(
    [
      'app/static/templates/index.pug',
      'app/static/templates/views/!(_)*.pug',
      'app/static/templates/includes/!(_)*.pug'
    ],
    ['pug']
  );
	gulp.watch(
    'app/static/stylesheets/**/*.styl',
    ['stylus']
  );
	gulp.watch(
    'app/src/**/*.js',
    ['javascripts']
  );
});