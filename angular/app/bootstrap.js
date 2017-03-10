import {Configs} from "./app/configs.js";
import * as modules from "./app/modules.js";

export class Bootstrap {

    /**
     * Application Bootstrap constructor
     *
     * @return void;
     * */
    constructor() {
        this.name = 'app';
        this.includedModules = modules.modules;
        this.baseConfigurations = new Configs();
        this.angular = angular;
        this.modules = [
            'ngComponentRouter',
        ];

        this.runModules();
    }

    /**
     * Application module runner
     *
     * @return void;
     * */
    runModules() {
        for (let name in this.includedModules) {
            new this.includedModules[name](this);
            this.modules.push(this.name + '.' + name.toLowerCase());
        }

        this.run()
    }

    /**
     * Angular runner
     *
     * @return void;
     * */
    run() {
        this.angular.element(document).ready(() => {
            this.baseConfigurations.run(this.angular.module('app', this.modules));
            //Angular auto loader
            this.angular.bootstrap(document, ['app'])
        })
    }
}
