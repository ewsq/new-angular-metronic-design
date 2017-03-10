class Router {

    /**
     * Application Router constructor
     *
     * @return void;
     * */
    constructor () {}

    /**
     * Angular Router runner
     *
     * @return void;
     * */
    run (location) {
        location.hashPrefix('');
        location.html5Mode(false);
    }
}

export {Router}
