module.exports = function (grunt) {
    require('time-grunt')(grunt);

    var options = {
        config : {
            src : "grunt/*.js"
        }
    };
    var configs = require('load-grunt-configs')(grunt, options);

    grunt.initConfig(configs);

    grunt.registerTask('default');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
};
