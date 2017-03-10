import {NgObject} from "./NgObject.js";

class NgController extends NgObject {

    /**
     * Angular core controller runner
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super(app);

        this.runModules('controller', app);
    }

    /**
     * Angular core controller local module getter
     *
     * @return Array;
     * */
    get localModules() {
        let localModules = ['$scope', '$http'];

        return localModules.concat(this.ctrlModules);
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
     * Angular core controller local scope maker
     *
     * @param args Arguments
     *
     * @return void;
     * */
    action(...args) {
        let fnArgs = args;
        let thisArgs = fnArgs.splice(0, 1)[0];
        let localArgs = fnArgs.splice(0, args.length);

        this.localModules.map((el, id) => {
            thisArgs[el] = localArgs[id];
        });

        thisArgs.scope.apply(thisArgs, localArgs);
    }
}

export {NgController}
