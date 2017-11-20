/* 
* @Author: Marte
* @Date:   2017-11-10 11:00:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-13 14:26:11
*/
var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
    sass:'./src/sass/*.scss',
    js:'./src/js/*.js'
}

gulp.task('sass',function(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(gulp.dest('./src/css/')) 
    
})

gulp.task('jtSass',function(){
    // 监听home.scsss文件
    // 如果有修改，则执行compileSass任务
    gulp.watch('./src/sass/*.scss',['sass'])

});

// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// // 合并文件
// gulp.task('mergeJS',function(){
//     gulp.src(path.js)

//             // 合并文件
//             .pipe(concat('page.js'))

//             // 合并文件后输出（未压缩）
//             .pipe(gulp.dest('./dist/js'))

//             // 压缩文件
//             .pipe(uglify())

//             // 改名
//             .pipe(rename({ suffix: ".min"}))

//             // 输出压缩后的文件
//             .pipe(gulp.dest('./dist/js'))

// });



// gulp.task('default',function(){
//     console.log(666);
//     console.log(gulp);
// })