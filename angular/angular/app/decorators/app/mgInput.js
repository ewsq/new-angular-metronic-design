import {NgDecorator} from "../../core/NgDecorator.js";

class mgInput extends NgDecorator {
    constructor (app) {
        super(app)
    }

    get name () {
        return 'mgFormDirective'
    }

    get localModules () {
        return [
            '$delegate', '$filter'
        ]
    }

    action (app, $delegate, $filter) {
        this.$filter = $filter;
        this.elementEvents = [];
        this.directive = $delegate[0];
        this.link = this.directive.link;

        this.directive.compile = this.compile.bind(this);

        return $delegate;
    }

    compile () {
        return this.compileReturn.bind(this)
    }

    compileReturn (scope, element, attrs) {
        let that = this;

        that.link.apply(this, arguments);

        if (attrs.formOnEvents) {
            that.elementEvents = scope.$eval(attrs.formOnEvents);

            for (let i = 0; that.elementEvents.length > i; i++) {
                let elementEvent = that.elementEvents[i];

                element.on(elementEvent, (ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();

                    scope.$apply(() => {
                        let event = 'on' + that.$filter('Capitalize')(elementEvent);
                        scope.$parent[event](ev.srcElement);
                    });
                });
            }
        }
    }
}

export {mgInput}