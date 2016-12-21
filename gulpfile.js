// npm install -g gulp
// npm install --save-dev gulp
// npm install --save-dev gulp-uglify
// npm install --save-dev gulp-concat
// npm install --save-dev gulp-rename
// npm install --save-dev gulp-clean
// npm install --save-dev gulp-typescript
// npm install --save-dev gulp-sourcemaps


var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var rename=require('gulp-rename');
var clean=require('gulp-clean');
var tsFiles = 'app/**/*.ts';
var jsFiles="dist/app";
var staticJSDestination="dist/public/libs";
var imagesDestination="dist/public/images";
var cssDestination="dist/public/css";
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');


gulp.task('abc',['copy']);
 
gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('build.js'))
        .pipe(gulp.dest('dist/lib'))
        .pipe(rename('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('clean',function(){
 gulp.src('dist',{read:false})
 .pipe(clean());
});

gulp.task('copy',['clean'], function(){
   gulp.src(tsFiles)
  .pipe(gulp.dest(jsFiles));
});


// TypeScript compile
gulp.task('compile', ['clean','assets','libs'], function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('assets', function() {
  return gulp.src([ 'app/**/*', 
                    'index.html',
                    'systemjs.config.js', 
                   'tsconfig.json',
                    '!app/**/*.ts',
                     'public/**/*'], { base : './' })
    .pipe(gulp.dest('dist'))
}); 


// copy dependencies
gulp.task('libs', function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js'
])
    .pipe(gulp.dest('dist/lib'))
});



gulp.task('build', ['compile']);
gulp.task('default', ['build']);

 
