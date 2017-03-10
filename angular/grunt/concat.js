module.exports = {
    options: {
        separator: ';',
    },
    vendor: {
        src: [
            './frontend/bower/angular/angular.min.js',
            './frontend/bower/angular-component-route/angular_1_router.js',
            './frontend/bower/angular-component-route/ng_route_shim.js',
            // './frontend/bower/ngstorage/ngStorage.min.js',
        ],
        dest: './backend/node/public/app/vendor.js',
    },
    system: {
        src:[
            './frontend/bower/system.js/dist/system.js',
        ],
        dest: './backend/node/public/system.js',

    }
};
