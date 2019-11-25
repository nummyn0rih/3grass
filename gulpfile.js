const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', () => {
  gulp.watch('.src/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', () => gulp.src('src/app.js')
  .pipe(babel())
  .pipe(gulp.dest('dist'))
);
