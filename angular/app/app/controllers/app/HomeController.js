import {NgController} from "./../../core/NgController.js";

class HomeController extends NgController {
    /**
     * Angular Home controller constructor
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super(app);
    }

    /**
     * Angular core controller local module getter
     *
     * @return Array;
     * */
    get ctrlModules() {
        return []
    }

    /**
     * Angular Home controller scope magic function
     *
     * @return Array;
     * */
    scope() {
        this.api.emit('api', {
            'type': 'get',
            'params': '.home',
            'body': {
                'a': 'ff'
            }
        });
    }
}


export {HomeController};