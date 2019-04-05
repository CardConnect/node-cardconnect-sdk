var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp.src(['cardconnect/test/'], { read: false })
    .pipe(mocha({
      reporter: 'nyan',
      globals: {
        should: require('should')
      }
    }));
});
gulp.task('default', ['test']);
