import {NgDirective} from "../../core/NgDirective.js";

class signin extends NgDirective {
    constructor (app) {
        super(app)
    }

    get restrict () {
        return 'E'
    }

    link () {
        this.element.addClass('clearfix')
    }
}

export {signin}