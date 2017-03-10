export class Deferred {

    constructor () {
        var that = this;

        this.promise = new Promise((resolve, reject) => {
            that.resolve = resolve;
            that.reject = reject;
        });
    }
}