import {NgFactory} from "./../../core/NgFactory.js";
import {Deferred} from "./../../helpers/deferred.js";
import * as io from "./../../vendor/socket.io-client/dist/socket.io.js";

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

    get io() {
        return io;
    }

    /**
     * Angular Socket factory scope magic function
     *
     * @return Object;
     * */
    scope() {
        let that = this;
        let configs = [];
        let deferr = new Deferred();
        if (!window.configs) {
            this.$http.get('//api-php.mobyportal.com/api/params').then(data => {
                window.configs = data;

                for (let i = 0; data.data.length > i; i++) {
                    if (data.data[i].rule === 'socket') {
                        configs[i] = data.data[i];
                    }
                }

                that.config = configs;
                that.openSocketConnection().then(deferr.resolve);
            });
        } else {
            deferr.resolve(self.io);
        }

        return deferr.promise;
    }

    openSocketConnection() {
        let deferr = new Deferred();
        let l = 0;
        let self = this;

        for (let i = 0; this.config.length > i; i++) {
            let cf = self.config[i];
            self.io[cf['action']] = io['connect']('//api-php.mobyportal.com:' + cf['port'], {secure: true});
            self.io[cf['action']].cf = cf;
            self.io[cf['action']].on('connect', () => {
                ++l;

                if (self.config.length === l) {
                    deferr.resolve(self.io);
                }
            })
        }

        return deferr.promise;
    }
}

export {Socket}
