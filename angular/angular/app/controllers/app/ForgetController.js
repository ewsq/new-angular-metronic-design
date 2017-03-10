import {NgController} from "./../../core/NgController.js";

class ForgetController extends NgController {

    /**
     * Angular Forget controller constructor
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super(app);
    }

    /**
     * Angular Forget controller scope magic function
     *
     * @return Array;
     * */
    scope($scope) {
        $scope.ctrl = this
    }
}


export {ForgetController};