import {NgModel} from "./../../core/NgModel.js";

class SignInM extends NgModel {
    constructor(app) {
        super(app)
    }

    get localModules() {
        return []
    }

    action() {
        return {
            roles: this.roles,
            fields: this.fields,
            getData: this.getData
        }
    }

    get roles() {
        return {
            'name': ['required', 'email'],
            'password': ['required'],
        };
    }

    get fields() {
        return [{
            'label': 'User name',
            'name': 'name',
            'type': 'name',
            'icon': 'fa fa-user',
            'value': '',
            'disabled': false,
            'readonly': false,
            'placeholder': 'User name or email',
            'validation': {
                'required': 'Email is required',
                'email': 'Please type email'
            }
        }, {
            'label': 'Password',
            'name': 'password',
            'type': 'password',
            'icon': 'fa fa-lock',
            'value': '',
            'disabled': false,
            'readonly': false,
            'placeholder': 'Password',
            'validation': {
                'required': 'Password is required'
            }
        }]
    }
}

export {SignInM}
