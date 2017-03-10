import {NgObject} from "./../core/NgObject.js";
import * as services from "./index.js";

class Services extends NgObject {

    /**
     * Angular service constructor
     *
     * @return void;
     * */
    constructor () {
        super();

        this.generateModules()
    }

    /**
     * Angular service included modules getter
     *
     * @return const, Object;
     * */
    get services () {
        return services.modules
    }
}

export {Services};
