"use strict";
var random_1 = require('./random');
var capitalize_1 = require('./capitalize');
function get(options, defaultMinimum, defaultMaximum) {
    return function (dimension) {
        if (options[dimension])
            return options[dimension];
        var minProp = "min" + capitalize_1.default(dimension);
        var maxProp = "max" + capitalize_1.default(dimension);
        var providedMin = options[minProp];
        var providedMax = options[maxProp];
        if (!providedMin && !providedMax)
            return random_1.default(defaultMinimum, defaultMaximum);
        if (!providedMin)
            return providedMax;
        if (!providedMax)
            return providedMin;
        return random_1.default(providedMin, providedMax);
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = get;
//# sourceMappingURL=dimension.js.map