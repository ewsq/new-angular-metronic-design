module.exports = {
    html: {
        files: [
            {
                expand: true,
                flatten: true,
                src: ['frontend/html/**'],
                dest: 'backend/node/public/html/',
                filter: 'isFile'
            },
        ],
    },
    public: {
        files: [
            {
                expand: true,
                cwd: 'frontend/bower/',
                src: ['**/*.js'],
                dest: 'backend/node/public/app/vendor/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'frontend/bower/',
                src: ['**/*.woff2','**/*.woff','**/*.ttf'],
                dest: 'backend/node/public/fonts/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'frontend/img/',
                src: ['**/*.*'],
                dest: 'backend/node/public/img/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'frontend/angular/',
                src: ['**/*.config.js'],
                dest: 'backend/node/public/',
                filter: 'isFile'
            }
        ]
    }
};