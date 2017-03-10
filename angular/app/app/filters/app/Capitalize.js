import {NgFilter} from "./../../core/NgFilter.js";

class Capitalize extends NgFilter {

    /**
     * Angular Filter Capitalize constructor
     *
     * @param app Object
     *
     * @return void;
     * */
    constructor(app) {
        super(app)
    }

    /**
     * Angular Capitalize Filter filter magic function
     *
     * @return String;
     * */
    filter(input, char) {
        if (isNaN(input)) {
            char = char - 1 || 0;
            let letter = input.charAt(char).toUpperCase();
            let out = [];

            for (let i = 0; i < input.length; i++) {
                if (i === char) {
                    out.push(letter);
                } else {
                    out.push(input[i]);
                }
            }

            return out.join('');
        } else {
            return input;
        }
    }
}

export {Capitalize}