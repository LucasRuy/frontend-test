'use strict';

import gulp from 'gulp';

import browserSync from 'browser-sync';

import babelify   from 'babelify';
import browserify from 'browserify';
import buffer     from 'vinyl-buffer';
import source     from 'vinyl-source-stream';
import rename     from 'gulp-rename';

import imagemin   from 'gulp-imagemin';
import pug        from 'gulp-pug';

import stylus     from 'gulp-stylus';
import sourcemaps from 'gulp-sourcemaps';

const dir = {
	images: './app/static/images/*',
	templates: 'app/static/templates/*.pug',
	stylesheets: 'app/static/stylesheets/application.styl',
	javascripts: 'app/src/app.js'
};

const compile = file => {
  file.bundle()
      .pipe(source(dir.javascripts))
      .pipe(buffer())
      .pipe(rename('bundle.js'))
      .pipe(gulp.dest('./public/javascripts'))
};

gulp.task('javascripts', () => {
    const bundler = browserify(dir.javascripts).transform(babelify, { presets : [ 'es2015' ] });
    compile(bundler);
});

gulp.task ('server', () => {
	return browserSync.init({
		open: 'external',
		files: [
      'public/index.html',
      'public/stylesheets/*.css',
      'public/javascripts/*.js'
    ],
		server: {
      baseDir: './public/'
    }
	});
});

gulp.task('images', () => {
	gulp.src(dir.images)
	.pipe(imagemin())
	.pipe(gulp.dest('public/images'))
});

gulp.task('pug', () => {
	return gulp.src(dir.templates)
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./public/'));
});

gulp.task('stylus', () => {
  return gulp.src(dir.stylesheets)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', () => {
	gulp.watch(	['app/static/templates/index.pug', 'app/static/templates/_views/!(_)*.pug', 'app/static/templates/_includes/!(_)*.pug'], ['pug'] );
	gulp.watch( 'app/static/stylesheet/**/*.styl', ['stylus'] );
	gulp.watch( 'app/static/javascripts/**/*.js', ['script'] );
});

gulp.task('default', ['pug', 'stylus', 'images', 'javascripts', 'server', 'watch']);