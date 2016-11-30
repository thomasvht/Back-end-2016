/* gulpfile.js */
let gulp = require("gulp"), jshint = require("gulp-jshint");


gulp.task('hint', function () {
    return gulp
        .src(['./scripts/*.js', './*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});
