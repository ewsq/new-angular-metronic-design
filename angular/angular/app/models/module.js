import {NgObject} from "./../core/NgObject.js";
import * as models from "./index.js";

class Models extends NgObject {
    constructor() {
        super();

        this.generateModules()
    }

    get models() {
        return models.modules
    }
}

export {Models};