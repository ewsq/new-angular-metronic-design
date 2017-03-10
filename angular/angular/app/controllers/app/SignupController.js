import {NgController} from "./../../core/NgController.js";

class SignupController extends NgController {

    /**
     * Angular SignUp controller constructor
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super(app);
    }

    /**
     * Angular SignUp controller scope magic function
     *
     * @return Array;
     * */
    scope() {
        this.$scope.model = this.SignUpM;
    }

    /**
     * Angular core controller local module getter
     *
     * @return Array;
     * */
    get ctrlModules() {
        return ['SignUpM']
    }
}


export {SignupController};