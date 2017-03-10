import {NgObject} from "./NgObject.js";

class NgModel extends NgObject {
    constructor (app) {
        super();
        this.runModules('factory', app)
    }

    getData () {
        let result = {};

        for (let i = 0; this.fields.length > i; i++) {
            result[this.fields[i].name] = this.fields[i].value
        }

        return result
    }
}

export {NgModel}