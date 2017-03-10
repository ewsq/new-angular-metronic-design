module.exports = {
    sass: {
        options: {
            style: 'compressed'
        },
        files: {
            './../node/public/stylesheets/bootstrap.css': './sass/bootstrap.scss',
            './../node/public/stylesheets/component.css': './sass/metronic/components.scss',
            './../node/public/stylesheets/plugins.css': './sass/metronic/plugins.scss',
            './../node/public/stylesheets/login.css': './sass/metronic/pages/login-3.scss'
        }
    }
};