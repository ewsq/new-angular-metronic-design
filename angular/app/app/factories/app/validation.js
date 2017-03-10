import {NgFactory} from "./../../core/NgFactory.js";

const s = Symbol;

const privateMethods = {
    required: s('required'),
    required_if: s('required_if'),
    required_with: s('required_with'),
    required_without: s('required_without'),
    same: s('same'),
    size: s('size'),
    numeric: s('numeric'),
    integer: s('integer'),
    file: s('file'),
    filled: s('filled'),
    email: s('email'),
    distinct: s('distinct'),
    exists: s('exists'),
    date: s('date'),
    boolean: s('boolean'),
    image: s('image'),
    max: s('max'),
    min: s('min'),
    nullable: s('nullable'),
    not_in: s('not_in'),
    model: s('model'),
    roles: s('roles'),
    fetchedMessages: s('fetchedMessages'),
};

const pw = privateMethods;

class ValidationComponents {
    constructor() {
    }

    get rules() {
        return [
            'required', 'required_if', 'required_with', 'required_without',
            'same', 'size', 'numeric', 'integer', 'file', 'filled', 'email',
            'distinct', 'exists', 'date', 'boolean', 'image', 'max', 'min',
            'nullable', 'not_in',
        ];
    }

    extend(roles, model) {
        let that = this;
        that.hasRelation = false;
        if (typeof roles == 'object' &&
            typeof model == 'object') {
        }

        that[pw.model] = model;
        that[pw.roles] = roles;

        that.fetch();

        if (!that.hasRelation) {
            throw Error('Wrong params in Validation', 488);
        }
    }

    check(scope) {
        this[pw.model] = scope.ngModel;
        scope.errors = this.fetch();
    }

    fetch() {
        let that = this;
        this[pw.fetchedMessages] = {};

        Object.keys(that[pw.roles]).map((el, id) => {
            if (typeof that[pw.model][el] != 'undefined') {
                let hasActiveRole = false;
                if (that[pw.roles][el] instanceof Array) {
                    that[pw.roles][el].map((rel, rid) => {
                        let privateFunctionName = '';
                        let localRel = rel.split(':');
                        if (localRel.length > 1) {
                            privateFunctionName = localRel[0];
                        } else {
                            privateFunctionName = rel;
                        }
                        if (that[pw[privateFunctionName]] instanceof Function && !hasActiveRole) {
                            that[pw[privateFunctionName]](that[pw.model][el], localRel[1]);
                        }
                        hasActiveRole = true;
                    })
                }
                that.hasRelation = true;
            }
        });

        return this[pw.fetchedMessages];
    }

    [pw.required](model) {//TODO: will be continue
        /*if (typeof model == 'string' && model.length === 0) {
            debugger
        }
        else if (typeof model == 'object' && model instanceof Array && model.length === 0) {
            debugger
        }
        else if (typeof model == 'object' && Object.keys(model).length === 0) {
            debugger
        }*/
    }

    [pw.required_if](model, anotherRole) {//TODO: will be continue
        /*debugger*/
    }

    [pw.required_with]() {//TODO: will be continue

    }

    [pw.required_without]() {//TODO: will be continue
    }

    [pw.same]() {//TODO: will be continue
    }

    [pw.size]() {//TODO: will be continue
    }

    [pw.numeric]() {//TODO: will be continue
    }

    [pw.integer]() {//TODO: will be continue
    }

    [pw.file]() {//TODO: will be continue
    }

    [pw.filled]() {//TODO: will be continue
    }

    [pw.email]() {//TODO: will be continue
    }

    [pw.distinct]() {//TODO: will be continue
    }

    [pw.exists]() {//TODO: will be continue
    }

    [pw.date]() {//TODO: will be continue
    }

    [pw.boolean]() {//TODO: will be continue
    }

    [pw.image]() {//TODO: will be continue
    }

    [pw.max]() {//TODO: will be continue
    }

    [pw.min]() {//TODO: will be continue
    }

    [pw.nullable]() {//TODO: will be continue
    }

    [pw.not_in]() {//TODO: will be continue
    }
}

class Validation extends NgFactory {

    /**
     * Angular Validation factory constructor
     *
     * @param app Object
     *
     * @return void;
     * */
    constructor(app) {
        super(app);
    }

    /**
     * Angular Validation factory scope magic function
     *
     * @return Object;
     * */
    scope() {
        return new ValidationComponents();
    }
}

export {Validation};