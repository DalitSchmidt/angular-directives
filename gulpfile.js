const gulp = require('gulp')
const connect = require('gulp-connect')

gulp.task('connect', function() {
    connect.server()
})

gulp.task('watch', function() {

})

gulp.task('default', ['connect'])