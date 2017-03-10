module.exports = {
    sass: {
        options: {
            style: 'compressed'
        },
        files: {
            'backend/node/public/css/bootstrap.css': 'frontend/sass/bootstrap.scss',
            'backend/node/public/css/component.css': 'frontend/sass/metronic/components.scss',
            'backend/node/public/css/plugins.css': 'frontend/sass/metronic/plugins.scss',
            'backend/node/public/css/login.css': 'frontend/sass/metronic/pages/login-3.scss'
        }
    }
};