var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("Evviva hai creato un Task di Gulp");
});

gulp.task('html', function(){
  console.log("immagina qualcosa di utile fatto al tuo html");
});

gulp.task('styles', function(){
  console.log("immagina Sass o PostCSS task compiuti qui");
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
