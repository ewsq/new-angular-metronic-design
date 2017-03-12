module.exports = {
    html: {
        files: [
            {
                expand: true,
                flatten: true,
                src: ['./html/**'],
                dest: './../express/public/html/',
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
                dest: './../express/public/app/vendor/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: './bower/',
                src: ['**/*.woff2','**/*.woff','**/*.ttf'],
                dest: './../express/public/fonts/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: './img/',
                src: ['**/*.*'],
                dest: './../express/public/img/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: './app/',
                src: ['**/*.config'],
                dest: './../express/public/',
                filter: 'isFile'
            }
        ]
    }
};