// gulpfile.js
var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var prefixer = require('gulp-autoprefixer');
var uglifyjs = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var minifier = require('gulp-uglify/minifier');
var pump = require('pump');

gulp.task('less', function(cb) {
    pump([
        gulp.src('./style.less'),
        less(),
        prefixer({ browsers: '> 2%' }),
        cleanCSS(),
        rename({ suffix: '.min' }),
        gulp.dest('./')
    ], cb)
});

gulp.task('js', function(cb) {
    pump([
            gulp.src('./widget.js'),
            babel({
                presets: ['es2015']
            }),
            uglifyjs(),
            rename({ suffix: '.min' }),
            gulp.dest('./')
        ],
        cb
    );
});

gulp.task('deploy', ['less', 'js'])

gulp.task('watch', function() {
    gulp.watch('./style.less', ['less']);
    gulp.watch('./widget.js', ['js']);
});
