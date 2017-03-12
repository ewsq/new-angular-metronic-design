import {NgController} from "./../../core/NgController.js";

class AppController extends NgController {

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
     * Angular Home controller scope magic function
     *
     * @return Array;
     * */
    scope($scope, $http) {
    }
}


export {AppController};