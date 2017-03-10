import {NgDirective} from "../../core/NgDirective.js";

class mgForm extends NgDirective {
    constructor(app) {
        super(app)
    }

    get restrict() {
        return 'E'
    }

    get controllerAs() {
        return 'ctrl'
    }

    get scopeObj() {
        return {
            formData: '&',
            onInput: '&',
            onSubmit: '&',
        }
    }

    get localModules() {
        return ['Validation']
    }

    link() {
        this.Validation.extend(this.scope.$parent.model.roles, this.scope.$parent.model.getData());
        this.scope.$parent.onInput = this.onInput.bind(this);
        this.scope.$parent.onSubmit = this.onSubmit.bind(this);
    }

    onInput(el) {
        this.Validation.check(this.scope.$parent);
    }

    onSubmit(el) {
        this.Validation.check(this.scope.$parent);
    }
}

export {mgForm}
