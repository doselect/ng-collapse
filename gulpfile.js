var gulp = require('gulp')
var uglify = require('gulp-uglifyjs')
var concat = require('gulp-concat')
var templateCache = require('gulp-angular-templatecache')

gulp.task('templateCache', function () {
  return gulp.src(['./collapse.html'])
    .pipe(templateCache('templateCache.js', {module: 'ngCollapse'}))
    .pipe(gulp.dest('.'))
})

gulp.task('concat', ['templateCache'], function () {
  return gulp.src(['./ng-collapse.js', 'templateCache.js'])
    .pipe(concat('ng-collapse.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('uglify', ['concat'], function() {
  gulp.src('dist/ng-collapse.js')
    .pipe(uglify('ng-collapse.min.js'))
    .pipe(gulp.dest('dist'))
})
