module.exports = {
    html: {
        files: [
            {
                expand: true,
                flatten: true,
                src: ['./html/**'],
                dest: './../node/public/html/',
                filter: 'isFile'
            },
        ],
    },
    public: {
        files: [
            {
                expand: true,
                cwd: './bower/',
                src: ['**/*.js'],
                dest: './../node/public/app/vendor/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: './bower/',
                src: ['**/*.woff2','**/*.woff','**/*.ttf'],
                dest: './../node/public/fonts/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: './img/',
                src: ['**/*.*'],
                dest: './../node/public/img/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: './app/',
                src: ['**/*.config.js'],
                dest: './../node/public/',
                filter: 'isFile'
            }
        ]
    }
};