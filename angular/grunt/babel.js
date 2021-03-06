module.exports = {
    options: {
        sourceMap: true,
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-amd']
    },
    app: {
        files: [
            {
                expand: true,
                cwd: './app/',
                src: '**/*.js',
                dest: './../node/public/'/*'./backend/node/public/'*/
            }
        ]
    }
};