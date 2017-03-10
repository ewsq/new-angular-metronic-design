import {NgFactory} from "./../../core/NgFactory.js";

class Socket extends NgFactory {

    /**
     * Angular Socket factory constructor
     *
     * @param app Object
     *
     * @return void;
     * */
    constructor(app) {
        super(app);
    }

    /**
     * Angular Socket factory scope magic function
     *
     * @return Object;
     * */
    scope() {
        let result = {};

        this.methods = ['on', 'off', 'emit'];

        return result;
    }
}

export {Socket}
