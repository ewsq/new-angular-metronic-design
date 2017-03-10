import {NgObject} from "./../core/NgObject.js";
import * as directives from "./index.js";

class Directives extends NgObject {

    /**
     * Angular decorator constructor
     *
     * @return void;
     * */
    constructor() {
        super();

        this.generateModules()
    }

    /**
     * Angular directives included modules getter
     *
     * @return const, Object;
     * */
    get directives() {
        return directives.modules
    }
}

export {Directives};