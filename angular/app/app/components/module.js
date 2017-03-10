import {NgObject} from "./../core/NgObject.js";
import * as components from "./index.js";

class Components extends NgObject {

    /**
     * Angular components module constructor
     *
     * @return void;
     * */
    constructor() {
        super();

        this.generateModules();
    }

    /**
     * Angular components included modules getter
     *
     * @return cont, Object;
     * */
    get components() {
        return components.modules
    }
}

export {Components};
