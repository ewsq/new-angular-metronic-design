module.exports = {
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
        tasks: ['babel:vendor']
    },
    sass:{
        files: ['<%= jshint.sass %>'],
        tasks: ['sass:scss']
    }
};