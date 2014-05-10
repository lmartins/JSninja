'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    sass            = require('gulp-sass'),
    prefix          = require('gulp-autoprefixer'),
    coffee          = require('gulp-coffee'),
    coffeelint      = require('gulp-coffeelint'),
    component       = require('gulp-component'),
    componentcoffee = require('component-coffee'),
    plumber         = require('gulp-plumber'),
    changed         = require('gulp-changed'),
    uglify          = require('gulp-uglify'),
    connect         = require('gulp-connect'),
    // livereload      = require('gulp-livereload'),
    watch           = require('gulp-watch'),
    notify          = require('gulp-notify');
    // floserver  = require("./flo_server.js");

var options = {

  COFFEE: {
    src: ["src/coffee/**/*.coffee"],
    build: "build/js/"
  },

  COMPONENT: {
    manifest: "component.json",
    // este src é usado para fazer watching de components pessoais
    src: ["mycomponents/**/*.coffee", "mycomponents/**/*.js", "mycomponents/**/*.css"],
    build: "build/css/"
  },

  HTML:{
    src: '*.html'
  },

  SASS: {
    src: "src/sass/**/*.scss",
    build: "build/css/"
  },

  IMAGES: {
    src    : "src/images/**/*",
    build  : "build/images",
  },

  LIVE_RELOAD_PORT: 35729

}

// SERVER ---------------------------------------------------------------------
gulp.task('connect', function() {
  connect.server({
    // root: '__dirname',
    livereload: true
  });
});

// SASS -----------------------------------------------------------------------
gulp.task('sass', function() {
  gulp.src( options.SASS.src )
    // .pipe(watch({
    //   name: "Sass"
    // }))
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
      }))
    // .on("error", notify.onError())
    .on("error", function (err) {
      console.log("Error:", err);
    })
    .pipe(prefix( "last 1 version" ))
    .pipe(gulp.dest( options.SASS.build ))
    .pipe(connect.reload());
});


// COFFEESCRIPT ---------------------------------------------------------------
gulp.task('coffee', function () {
  gulp.src( options.COFFEE.src )
    // .pipe(watch({
    //   name: "Coffee"
    // }))
    .pipe(changed( options.COFFEE.build , { extension: '.js' }))
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffee({
      bare: true,
      sourceMap: true
      })
      .on('error', gutil.log))
    .pipe(gulp.dest( options.COFFEE.build ))
    .pipe(connect.reload());
});



// COMPONENT ------------------------------------------------------------------
gulp.task('component-js', function () {
  gulp.src( options.COMPONENT.manifest )
    // .pipe(watch({
    //   name: "ComponentJS"
    // }))
    .pipe(component.scripts({
      standalone: false,
      configure: function (builder) {
        builder.use( componentcoffee )
      }
    }))
    .pipe(gulp.dest( options.COFFEE.build ))
})

gulp.task('component-css', function () {
  gulp.src( options.COMPONENT.manifest )
    // .pipe(watch({
    //   name: "ComponentCSS"
    // }))
    .pipe(component.styles({
      configure: function (builder) {
        builder.use( sass )
      }
    }))
    .pipe(gulp.dest( options.SASS.build ))
})


// BOWER ----------------------------------------------------------------------
gulp.task ('bowerCopy', function () {
  gulp.src ([
      'src/vendor/jquery/dist/jquery.js',
      'src/vendor/backbone/backbone.js',
      'src/vendor/underscore/underscore.js'
      ])
    .pipe (uglify())
    .pipe (gulp.dest( "build/vendor/" ))
});

gulp.task ('bowerMerge', function () {
  gulp.src ([
      'src/vendor/jquery-easing/jquery.easing.js'
    ])
    .pipe (concat ("bundle.js"))
    .pipe (uglify())
    .pipe (gulp.dest ("build/vendor/"))
});

gulp.task('bower', [ 'bowerCopy', 'bowerMerge' ]);



// HTML -----------------------------------------------------------------------
gulp.task('html', function () {
  gulp.src( options.HTML.src )
    // .pipe(watch({
    //   name: "HTML"
    // }))
    .pipe(connect.reload());
});




// GLOBAL TASKS ---------------------------------------------------------------
// gulp.task('default', [ 'html', 'sass', 'coffee' ]);

gulp.task('component', [ 'component-js', 'component-css' ]);

gulp.task('watch', function () {
  gulp.watch( options.HTML.src , ['html']);
  gulp.watch( options.COFFEE.src , ['coffee']);
  gulp.watch( [options.COMPONENT.manifest, options.COMPONENT.src] , ['component-js', 'component-css']);
  // gulp.watch(options.IMAGE_SOURCE, ['images']);
  gulp.watch( options.HTML.src , ['html']  );
  gulp.watch( options.SASS.src , ['sass']  );
  // floserver()
});

gulp.task('default', ['connect', 'watch']);
