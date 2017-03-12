module.exports = {
    Gruntfile: {
        files: ['<%= jshint.Gruntfile %>'],
        tasks: ['watch']
    },
    app: {
        files: ['<%= jshint.app %>'],
        tasks: ['babel:app']
    },
    html: {
        files: ['<%= jshint.html %>'],
        tasks: ['copy:html']
    },
    vendor: {
        files: ['<%= jshint.vendor %>'],
        tasks: ['concat:vendor']
    },
    sass:{
        files: ['<%= jshint.sass %>'],
        tasks: ['sass:scss']
    }
};