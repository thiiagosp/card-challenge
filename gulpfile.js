'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const fractal = require('@frctl/fractal').create();
const open = require('opn');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sassGlob = require('gulp-sass-glob');

fractal.set('project.title', 'valtech-front');
fractal.web.set('builder.dest', 'public');
fractal.web.set('static.path', __dirname + '/static');
fractal.docs.set('path', `${__dirname}/docs`);
fractal.components.set('path', `${__dirname}/src/components`);
fractal.components.set('ext', '.html');
fractal.web.set('static.path', __dirname + '/public');


fractal.components.set('resources', {
    scss: {
        label: 'SCSS',
        match: ['**/*.scss']
    },
    s: {
        label: 'JS',
        match: ['**/*.js']
    },
    other: {
        label: 'Other Assets',
        match: ['**/*', '!**/*.scss', '!**.css']
    }
});

const logger = fractal.cli.console;

gulp.task('default', function() {
    gulp.start('front-dev');
    gulp.start('back-dev');
    gulp.start('docs-dev');
});

const scssFilesPath = ['./src/components/**/*.scss','./src/components/**/**/*.scss', './src/assets/sass/**/*.scss'];

gulp.task('styles', function() {
	gulp.src(scssFilesPath)
	.pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.scss'))
	.pipe(rename('main.css'))
	.pipe(gulp.dest('./public/stylesheets'))
});

gulp.task('watch', function(){
	gulp.watch(scssFilesPath , ['styles']);
})

gulp.task('front-dev', shell.task(['npm run dev']));
gulp.task('build', function(){

    gulp.start('watch');
    gulp.start('front-dev');
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        open('http://localhost:3000/');
    });
});

gulp.task('build-all', function() {
    gulp.start('front-build');
    gulp.start('docs-build');
});

gulp.task('front-build', shell.task(['npm run build']));
gulp.task('docs-build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});
