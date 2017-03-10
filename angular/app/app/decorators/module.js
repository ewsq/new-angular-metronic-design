import {NgObject} from "./../core/NgObject.js";
import * as decorators from "./index.js";

class Decorators extends NgObject {

    /**
     * Angular decorator constructor
     *
     * @return void;
     * */
    constructor() {
        super();

        this.generateModules();
    }

    /**
     * Angular decorators included modules getter
     *
     * @return const, Object;
     * */
    get decorators() {
        return decorators.modules;
    }
}

export {Decorators};