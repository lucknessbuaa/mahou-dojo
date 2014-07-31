var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require('gulp-minify-css');
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var nodemon = require('gulp-nodemon');

gulp.task('sass', function() {
    gulp.src("scss/*.scss")
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest("public/css/"));
});

gulp.task("watch-sass", function() {
    gulp.watch("scss/**/*.scss", ['sass']);
});

gulp.task('develop', function() {
    nodemon({
        script: 'app.js',
        ext: 'html js',
        ignore: ['ignored.js']
    }).on('restart', function() {
        console.log('restarted!')
    })
})