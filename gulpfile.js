var gulp              = require('gulp'),
    babel             = require('gulp-babel'),
    uglify            = require('gulp-uglify'),
    SOURCE_DIRECTORY  = 'src/**/*.js',
    DEST_DIRECTORY    = 'dist/';

gulp.task('compile', function () {
  return gulp.src(SOURCE_DIRECTORY)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(DEST_DIRECTORY));
});

gulp.task('default', gulp.series('compile', function () {
  // Empty function
}));
