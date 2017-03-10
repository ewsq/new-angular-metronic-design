import {NgObject} from "./../core/NgObject.js";
import * as controllers from "./index.js";

class Controllers extends NgObject {

    /**
     * Angular controller module constructor
     *
     * @return void;
     * */
    constructor() {
        super();

        this.generateModules()
    }

    /**
     * Angular controllers included modules getter
     *
     * @return cont, Object;
     * */
    get controllers() {
        return controllers.modules
    }
}

export {Controllers};