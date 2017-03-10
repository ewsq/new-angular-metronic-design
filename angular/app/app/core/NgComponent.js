import {NgObject} from "./NgObject.js";
import {routes} from "./../routers/AppRouter.js";

class NgComponent extends NgObject {

    /**
     * Angular core component runner
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super(app);

        this.runModules('component', app)
    }

    /**
     * Angular core component local module getter
     *
     * @return Object;
     * */
    get localModules() {
        return {
            require: this.require,
            bindings: this.bindings,
            template: this.template,
            controller: this.controller,
            transclude: this.transclude,
            templateUrl: this.templateUrl,
            controllerAs: this.controllerAs,
            $routeConfig: this.$routeConfig
        }
    }

    /**
     * Angular core component controller getter
     *
     * @return Object|String;
     * */
    get controller() {
        return this.objectName + 'Controller';
    }

    /**
     * Angular core component templateUrl getter
     *
     * @return String;
     * */
    get templateUrl() {
        let name = this.objectName.toLowerCase();
        return '/html/' + name + '.html';
    }

    /**
     * Angular core component template getter
     *
     * @return String;
     * */
    get template() {
    }

    /**
     * Angular core component bindings getter
     *
     * @return Object;
     * */
    get bindings() {
    }

    /**
     * Angular core component controllerAs getter
     *
     * @return String;
     * */
    get controllerAs() {
        return '$ctrl';
    }

    /**
     * Angular core component require getter
     *
     * @return Object;
     * */
    get require() {
    }

    /**
     * Angular core component transclude getter
     *
     * @return boolean;
     * */
    get transclude() {
        return false;
    }

    /**
     * Angular core component $routeConfig getter
     *
     * @return Array;
     * */
    get $routeConfig() {
        return routes[this.objectName];
    }
}

export {NgComponent}