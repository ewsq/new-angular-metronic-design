import {NgObject} from "./../core/NgObject.js";
import * as filters from "./index.js";

class Filters extends NgObject {

    /**
     * Angular filters constructor
     *
     * @return void;
     * */
    constructor() {
        super();

        this.generateModules()
    }

    /**
     * Angular filters included modules getter
     *
     * @return const, Object;
     * */
    get filters() {
        return filters.modules
    }
}

export {Filters};