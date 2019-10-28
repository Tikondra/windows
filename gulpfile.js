'use strict'

var gulp       = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'),// Для автоматического добавления префиксов
    pug          = require('gulp-pug'),
    htmlbeautify = require('gulp-html-beautify'),
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify');

gulp.task('pug', function() {
  return gulp.src("pug/*.pug")
      .pipe(plumber({
          errorHandler: notify.onError()
      }))
      .pipe(pug())
      .pipe(htmlbeautify())
      .pipe(gulp.dest("./"))      
      .pipe(browserSync.stream());
});

gulp.task('htmlbeautify', function() {
    var options = {
        indentSize: 2,
        unformatted: [
            // https://www.w3.org/TR/html5/dom.html#phrasing-content
             'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
             'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
            'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
        ] 
    };
gulp.src('./*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./'))
});

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('styles/main.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('css')) // Выгружаем результата в папку css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('script-min', function() {
    return gulp.src('js/script.js')        
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('js')); // Выгружаем в папку js
});

gulp.task('code', function() {
    return gulp.src('*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('css-min', function() {
    return gulp.src('css/main.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('css')); // Выгружаем в папку css
});

gulp.task('clean', async function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
    return gulp.src('img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({ // С кешированием
        // .pipe(imagemin({ // Сжимаем изображения без кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))/**/)
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('prebuild', async function() {

    var buildCss = gulp.src('css/main.css')
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('js/*.js') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
})

gulp.task('watch', function() {
    gulp.watch(['blocks/**/*.scss', 'styles/**/*.scss'], gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('js/script.js', gulp.parallel('script-min')); // Наблюдение за главным JS файлом и за библиотеками
});

gulp.task('default', gulp.parallel('css-min', 'sass', 'script-min', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass', 'script-min'));