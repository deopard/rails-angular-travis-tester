// Karma configuration
// Generated on Wed Sep 23 2015 12:14:25 GMT+0900 (KST)

module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'vendor/assets/components/angular/angular.min.js',

      'app/assets/javascripts/trevi/**/*.js',
      'app/assets/javascripts/trevi/**/*.es6',

      'vendor/assets/components/angular-mocks/angular-mocks.js',

      'test.js/**/*.js',
      'test.js/**/*.es6'
    ],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'app/views/**/*.html': ['ng-html2js']
      'app/assets/javascripts/trevi/**/*.es6': ['babel'],
      'test.js/**/*.es6': ['babel']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },

    // ngHtml2JsPreprocessor: {
    //   // strip this from the file path
    //   // stripPrefix: '',
    //   // stripSuffix: '',
    //   // // prepend this to the
    //   // prependPrefix: '',
    //   //
    //   // // or define a custom transform function
    //   // // - cacheId returned is used to load template
    //   // //   module(cacheId) will return template at filepath
    //   cacheIdFromPath: function(filepath) {
    //     return filepath.split('/_')[1];
    //   },
    //   //
    //   // // - setting this option will create only a single module that contains templates
    //   // //   from all the files, so you can load them all with module('foo')
    //   // // - you may provide a function(htmlPath, originalPath) instead of a string
    //   // //   if you'd like to generate modules dynamically
    //   // //   htmlPath is a originalPath stripped and/or prepended
    //   // //   with all provided suffixes and prefixes
    //   moduleName: 'remember'
    // },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
