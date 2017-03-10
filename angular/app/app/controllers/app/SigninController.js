import {NgController} from "./../../core/NgController.js";

class SigninController extends NgController {

    /**
     * Angular SignIn controller constructor
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super(app);
    }

    /**
     * Angular SignIn controller scope magic function
     *
     * @return Array;
     * */
    scope() {
        this.$scope.model = this.SignInM;
        this.$scope.errors = {};
        this.$scope.ngModel = this.$scope.model.getData();
    }

    /**
     * Angular core controller local module getter
     *
     * @return Array;
     * */
    get ctrlModules() {
        return ['SignInM']
    }

}


export {SigninController};