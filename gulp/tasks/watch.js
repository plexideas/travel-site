const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scriptRefresh');
  })
})

gulp.task('cssInject', ['styles'], () => {
  gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptRefresh', ['scripts'], () => {
  browserSync.reload();
});