/* gulpfile.js ( en niet gulp.js) */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs'); //code style checker

gulp.task('hint', function () {
    return gulp
        .src(['./scripts/*.js', './*.js'])
        //.pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});