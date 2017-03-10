import {NgObject} from "./../core/NgObject.js";
import * as factories from "./index.js";

class Factories extends NgObject {

    /**
     * Angular factory constructor
     *
     * @return void;
     * */
    constructor() {
        super();

        this.generateModules()
    }

    /**
     * Angular factories included modules getter
     *
     * @return const, Object;
     * */
    get factories() {
        return factories.modules
    }
}

export {Factories};
