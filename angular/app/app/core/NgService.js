import {NgObject} from "./NgObject.js";

class NgService extends NgObject {

    /**
     * Angular Service constructor
     *
     * @param app Object
     *
     * @return void;
     * */
    constructor(app) {
        super();
        this.runModules('service', app)
    }

    /**
     * Angular core factory local scope caller
     *
     * @param args Arguments
     *
     * @return Object;
     * */
    action(...args) {
        let fnArgs = args;
        let thisArgs = fnArgs.splice(0, 1)[0];
        let localArgs = fnArgs.splice(0, args.length);

        thisArgs.scopeHandler.apply(thisArgs, localArgs);
    }

    /**
     * Angular core factory local scope maker
     *
     * @return void;
     * */
    scopeHandler() {
        let that = this;
        let args = arguments;

        this.localModules.map((el, id) => {
            that[el] = args[id];
        });

        this.scope.apply(that, arguments);
    }

    /**
     * Angular core factory local module getter
     *
     * @return Array;
     * */
    get localModules() {
        return ['$rootScope']
    }

}

export {NgService}