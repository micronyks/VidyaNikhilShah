// npm install -g gulp
// npm install --save-dev gulp
// npm install --save-dev gulp-uglify
// npm install --save-dev gulp-concat
// npm install --save-dev gulp-rename
// npm install --save-dev gulp-clean
// npm install --save-dev gulp-typescript
// npm install --save-dev gulp-sourcemaps
// npm install --save-dev gulp-imagemin
//npm install --save-dev gulp-ruby-sass


var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

var tsFiles = 'app/**/*.ts';
var jsFiles = "dist/app";
var staticJSDestination = "dist/public/libs";
var imagesDestination = "dist/public/images";
var cssDestination = "dist/public/css";
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');


gulp.task('abc', ['copy']);

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('build.js'))
        .pipe(gulp.dest('dist/lib'))
        .pipe(rename('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('clean', function () {
    gulp.src('dist', { read: false })
        .pipe(clean());
});

gulp.task('copy', ['clean'], function () {
    gulp.src(tsFiles)
        .pipe(gulp.dest(jsFiles));
});


// TypeScript compile
gulp.task('compile',
    ['clean',
        'assets',
        //'libs'
    ], function () {
        return gulp
            .src('app/**/*.ts')
            .pipe(typescript(tscConfig.compilerOptions))
            .pipe(gulp.dest('dist/app'));
    });

gulp.task('assets', function () {
    return gulp.src(['app/**/*',
        'node_modules/**/*',
        'index.html',
        'systemjs.config.js',
        'systemjs-angular-loader.js',
        'tsconfig.json',
        '!app/**/*.ts',
        'public/**/*'
    ],
        { base: './' })
        .pipe(gulp.dest('dist'))
});


// copy dependencies
gulp.task('libs', function () {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ])
        .pipe(gulp.dest('dist/lib'))
});

gulp.task('compress', function () {
    return gulp.src('public/images/**.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('public/images/'))
});


gulp.task('sass', function () {
    return gulp.src('public/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('public/scss/**/*.scss', ['sass']);
});


gulp.task('build', ['compile']);
gulp.task('default', ['build']);


