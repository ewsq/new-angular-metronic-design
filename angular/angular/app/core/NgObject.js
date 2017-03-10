class NgObject {

    /**
     * Angular ng core constructor
     *
     * @param app Object
     *
     * @return void;
     * */
    constructor(app) {
        this.angular = angular;
        this.app = app || {};
        this.ngModule = {};
    }

    /**
     * Angular module definer
     *
     * @return void;
     * */
    defineModules() {
        let originalName = this.objectLowerName;

        let newName = originalName.charAt(0).toUpperCase() + originalName.slice(1);
        let changedName = 'active' + originalName;

        this[changedName] = {};

        for (let objectName in this[originalName]) {
            this[changedName][objectName] = new this[originalName][objectName](this.ngModule[newName]);
        }
    }

    /**
     * Angular module generator
     *
     * @return void;
     * */
    generateModules() {
        let originalName = this.objectLowerName;

        // this.cc = new this.conf();

        let changedName = originalName.charAt(0).toUpperCase() + originalName.slice(1);

        this.ngModule[changedName] = this.angular.module('app.' + originalName, this.externalModules);
        // this.ngModule[fname].config(this.cc.config.bind(null, this.ngModule[fname]));

        this.defineModules()
    }

    /**
     * Angular module runner
     *
     * @param moduleName string
     * @param app object
     *
     * @return void;
     * */
    runModules(moduleName, app) {
        let localModules = this.localModules;
        let name = this.objectName;

        if (moduleName !== 'component') {
            localModules.push(this.action.bind(this, this));
        } else {
            name = name.charAt(0).toLowerCase() + name.slice(1);
        }

        app[moduleName](name, localModules)
    }

    /**
     * Angular module external module getter
     *
     * @return Array;
     * */
    get externalModules() {
        return [];
    }

    /**
     * Angular module class name getter
     *
     * @return String;
     * */
    get objectName() {
        return this.name || this.constructor.name;
    }

    /**
     * Angular module class name getter
     *
     * @return String;
     * */
    get objectLowerName() {
        let name = this.objectName;
        return name.toLowerCase();
    }
}


export {NgObject}
