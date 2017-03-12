module.exports = {
    options: {
        separator: ';',
    },
    vendor: {
        src: [
            './bower/angular/angular.min.js',
            './bower/angular-component-route/angular_1_router.js',
            './bower/angular-component-route/ng_route_shim.js',
            // './frontend/bower/ngstorage/ngStorage.min.js',
        ],
        dest: './../express/public/app/vendor.js',
    },
    system: {
        src: [
            './bower/system.js/dist/system.js',
        ],
        dest: './../express/public/system.js',

    }
};
