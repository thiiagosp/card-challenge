'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const fractal = require('@frctl/fractal').create();
const open = require('opn');

fractal.set('project.title', 'valtech-front'); // title for the project
fractal.web.set('builder.dest', 'public'); // destination for the static export
fractal.web.set('static.path', __dirname + '/static');
fractal.docs.set('path', `${__dirname}/docs`); // location of the documentation directory.
fractal.components.set('path', `${__dirname}/src/components`); // location of the component directory.
fractal.components.set('ext', '.html') // using html files for component docs
fractal.components.set('default.preview', '@layout'); // layout for components

const logger = fractal.cli.console;


// Development tasks
gulp.task('default', function() {
    gulp.start('front-dev');
    gulp.start('back-dev');
    gulp.start('docs-dev');
});

gulp.task('front-dev', shell.task(['npm run dev']));
gulp.task('build', function(){

    gulp.start('front-dev');
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        open('http://localhost:3000/');
    });
});


// Build tasks
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
