import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task ('server', () => {
  return browserSync.init({
    open: 'external',
    files: [
      'public/index.html',
      'public/stylesheets/*.css',
      'public/javascripts/*.js',
    ],
    server: {
      baseDir: './public/',
    },
  });
});

gulp.task('browserSync', ['server']);
