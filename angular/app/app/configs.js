import {Router} from "./router.js";

export class Configs {

    /**
     * Application Configs constructor
     *
     * @return void;
     * */
    constructor() {
        this.router = new Router();
    }

    /**
     * Angular Configs runner
     *
     * @param app Object
     *
     * @return void;
     * */
    run(app) {
        this.app = app;
        this.app
            .config(['$locationProvider', this.config.bind(null, this)])
            .value('$routerRootComponent', 'app')
            .run(this.runApp);
    }

    /**
     * Angular Configs callback
     *
     * @param conf Object
     * @param $locationProvider Object
     *
     * @return void;
     * */
    config(conf, $locationProvider) {
        conf.router.run($locationProvider);
    }

    /**
     * Angular run callback
     *
     * @return void;
     * */
    runApp() {
        // TODO: working on angular load complete
    }
}