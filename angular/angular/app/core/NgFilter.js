import {NgObject} from "./NgObject.js";

class NgFilter extends NgObject {

    /**
     * Angular Filter constructor
     *
     * @param app Object
     *
     * @return void;
     * */
    constructor (app) {
        super();

        this.runModules('filter', app)
    }

    /**
     * Angular core filter local module getter
     *
     * @return Array;
     * */
    get localModules () {
        return []
    }

    /**
     * Angular core factory local filter caller
     *
     * @return Object;
     * */
    action () {
        let result = this.filter.bind(this);

        return result
    }
}

export {NgFilter}
