var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require('gulp-minify-css');
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var pngcrush = require("imagemin-pngcrush");
var tinypng = require("gulp-tinypng");
var nodemon = require('gulp-nodemon');
var changed = require('gulp-changed');

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
        ignore: ['public/**/*']
    }).on('restart', function() {
        console.log('restarted!')
    })
})

gulp.task('image-png', function() {
    return gulp.src("img/*.png")
        .pipe(changed('public/img'))
        .pipe(tinypng('9kl3nT2f8qC-AaApBVXDeQt-37ArLMNs'))
        .on('error', console.error)
        .pipe(gulp.dest("public/img"));
});

gulp.task('image-other', function() {
    return gulp.src("img/*.{jpg,jpeg,gif}")
        .pipe(changed('public/img'))
        .pipe(imagemin({
            progressive: true,
            use: [pngcrush()]
        }))
        .pipe(gulp.dest("public/img"));
});

gulp.task('image', ['image-png', 'image-other']);