import {NgObject} from "./NgObject.js";

class NgDecorator extends NgObject {

    /**
     * Angular core decorator runner
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super();
        this.runModules('decorator', app)
    }

    /**
     * Angular core decorator local module getter
     *
     * @return Array;
     * */
    get localModules() {
        return ['$delegate']
    }

    action(...args) {
        let fnArgs = args;
        let thisArgs = fnArgs.splice(0, 1)[0];
        let localArgs = fnArgs.splice(0, args.length);

        this.localModules.map((el, id) => {
            thisArgs[el] = localArgs[id];
        });

        return thisArgs.compile(thisArgs, localArgs);
    }
}

export {NgDecorator}