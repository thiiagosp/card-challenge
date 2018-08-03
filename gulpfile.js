'use strict';
const gulp = require('gulp');
const exec = require('gulp-exec');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');

const watchOpt = {awaitWriteFinish: true};

const STYLES_WATCHLIST = [
	'global/**/*.scss',
	'components/**/*.scss'
];

const JS_LINT_WATCHLIST = [
	'components/**/*.js',
	'js/**/*.js',
	'*.js'
];

const JS_BUILD_WATCHLIST = [
	'components/**/*.js',
	'js/**/*.js'
];

/* CSS */
gulp.task('css:process', function () {
	return gulp.src([
        'global/**/*.scss',
        'components/**/*.scss'
	])
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sassGlob())
	.pipe(sass.sync({
		precision: 10,
		includePaths: ['./node_modules']
	})).on('error', sass.logError)
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('public/css'));
});

gulp.task('css:watch', function () {
	gulp.watch(STYLES_WATCHLIST, watchOpt, gulp.series('css'));
});

/* Javascript */
gulp.task('js:watch', function () {
	gulp.watch(JS_LINT_WATCHLIST, watchOpt, gulp.series('js:lint'));
});

gulp.task('build', function() {
  return gulp.src('./**/**')
    .pipe(exec('npm run dev'));
});

