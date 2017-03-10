import {NgDecorator} from "../../core/NgDecorator.js";

class $http extends NgDecorator {

    /**
     * Angular $http decorator runner
     *
     * @param app Object;
     *
     * @return void;
     * */
    constructor(app) {
        super(app)
    }


    compile(app) {
        this.app.http = {};
        this.methods = ['get', 'head', 'jsonp', 'patch', 'post', 'put', 'delete'];

        for (let i = 0; this.methods.length > i; i++) {
            this.app.http['_' + this.methods[i]] = this.$delegate[this.methods[i]];
            this.$delegate[this.methods[i]] = this.handler.bind(this, this.methods[i]);
        }

        return this.$delegate;
    }

    /**
     * Angular $http decorator runner
     *
     * @param fn string;
     *
     * @return Promise;
     * */
    handler(fn) {
        let args = [].slice.call(arguments);
        args.splice(0, 1);
        return this.request(fn, args);
    }

    /**
     * Angular $http decorator runner
     *
     * @param fn string;
     * @param options arguments;
     *
     * @return Promise;
     * */
    request(fn, options) {
        return this.app.http['_' + fn].apply(null, options);
    }
}

export {$http};