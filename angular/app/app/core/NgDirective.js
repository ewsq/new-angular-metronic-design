import {NgObject} from "./NgObject.js";

class NgDirective extends NgObject {

    /**
     * Angular core directive runner
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super();

        this.runModules('directive', app);
    }

    /**
     * Angular core directive local scope maker
     *
     * @return Object;
     * */
    action(...args) {
        let fnArgs = args;
        let thisArgs = fnArgs.splice(0, 1)[0];
        let localArgs = fnArgs.splice(0, args.length);

        this.localModules.map((el, id) => {
            thisArgs[el] = localArgs[id];
        });

        return {
            controller: this.controllerName,
            controllerAs: this.controllerAs,
            templateUrl: this.templateUrl,
            link: this.linkGenerator.bind(thisArgs, localArgs),
            transclude: this.transclude,
            restrict: this.restrict,
            template: this.template,
            require: this.require,
            scope: this.scopeObj
        };
    }

    /**
     * Angular core directive local scope magic link maker
     *
     * @return void;
     * */
    linkGenerator(app, scope, element, attributes, controller) {
        this.scope = scope;
        this.element = element;
        this.attributes = attributes;
        this.controller = controller;
        this.link.apply(this, arguments);
    }

    /**
     * Angular core directive controllerName getter
     *
     * @return String;
     * */
    get controllerName() {
    }

    /**
     * Angular core directive controllerAs getter
     *
     * @return String;
     * */
    get controllerAs() {
    }

    /**
     * Angular core directive templateUrl getter
     *
     * @return String;
     * */
    get templateUrl() {
    }

    /**
     * Angular core directive transclude getter
     *
     * @return boolean;
     * */
    get transclude() {
    }

    /**
     * Angular core directive restrict getter
     *
     * @return Object;
     * */
    get restrict() {
    }

    /**
     * Angular core directive template getter
     *
     * @return String;
     * */
    get template() {
    }

    /**
     * Angular core directive require getter
     *
     * @return Object;
     * */
    get require() {
    }

    /**
     * Angular core directive scopeObj getter
     *
     * @return Object;
     * */
    get scopeObj() {
    }

    /**
     * Angular core directive local module getter
     *
     * @return Array;
     * */
    get localModules () {
        return []
    }
}

export {NgDirective}