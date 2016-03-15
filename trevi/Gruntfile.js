// jshint esnext:true
// jshint node:true
'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    common: {

    },

    // https://github.com/karma-runner/grunt-karma
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },

      continuous: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      // app: {
      //   files: { src: 'app/assets/javascripts/remember/app.js' }
      // }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['test']);

  grunt.registerTask('test', 'Run unit tests', ['jshint', 'karma:continuous']);
};
