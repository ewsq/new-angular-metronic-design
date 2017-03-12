module.exports = {
    sass: {
        options: {
            style: 'compressed'
        },
        files: {
            './../express/public/stylesheets/bootstrap.css': './sass/bootstrap.scss',
            './../express/public/stylesheets/component.css': './sass/metronic/components.scss',
            './../express/public/stylesheets/plugins.css': './sass/metronic/plugins.scss',
            './../express/public/stylesheets/login.css': './sass/metronic/pages/login-3.scss',
            './../express/public/stylesheets/layout3.css': './sass/metronic/layouts/layout3/layout.scss'
        }
    }
};
