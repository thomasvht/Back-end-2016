/*
 * gulpfile.js
 * 
 */

var gulp = require('gulp'),
    jshint = require('gulp-jshint');
    mocha = require('gulp-mocha'),
    gulputil = require('gulp-util');

/*-- hinting ---*/
gulp.task('hint', function () {
    return gulp
        .src(['./scripts/*.js', './*.js', './tests'])
        //.pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

/*-- unit testing ---*/
gulp.task('mocha_test_uitvoeren', function () {
    return gulp.src(['tests/mocha/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gulputil.log);
});

gulp.task('watch_mocha', function () {
    gulp.run('mocha_test_uitvoeren');
    gulp.watch(['tests/mocha/*.js', './**/*.js'], ['mocha_test_uitvoeren']);
});


gulp.task('default', ['mocha_test_uitvoeren']);