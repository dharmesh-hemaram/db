// Karma configuration
// Generated on Wed Aug 30 2017 16:22:35 GMT+0530 (India Standard Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      // Karma will require() these plugins
      'karma-coverage',
      'karma-jasmine',
      //'karma-qunit',
      'karma-chrome-launcher'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],//, 'qunit'


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'src/**/*.js', watched: true },
      { pattern: 'test/**/*.json', watched: true, served: true, included: false },
      { pattern: 'test/jasmine/**/*config.test.js', watched: true },
      { pattern: 'test/jasmine/**/*db.test.js', watched: true },
      { pattern: 'test/jasmine/store/**/*!(delete)test.js', watched: true },
      { pattern: 'test/jasmine/**/*db.delete.test.js', watched: true }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'src/**/*.js': ['coverage'] },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    client: {
      clearContext: false,
      qunit: {
        showUI: true,
        testTimeout: 5000
      }
    }
  })
}
