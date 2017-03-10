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
                cwd: './frontend/angular/',
                src: '**/*.js',
                dest: './backend/node/public/'/*'./backend/node/public/'*/
            }
        ]
    }
};