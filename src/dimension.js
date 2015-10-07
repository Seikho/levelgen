var getRandomValue = require('./random');
var capitalize = require('./capitalize');
module.exports = function get(options, defaultMinimum, defaultMaximum) {
    return function (dimension) {
        if (options[dimension])
            return options[dimension];
        var minProp = "min" + capitalize(dimension);
        var maxProp = "max" + capitalize(dimension);
        var providedMin = options[minProp];
        var providedMax = options[maxProp];
        if (!providedMin && !providedMax)
            return getRandomValue(defaultMinimum, defaultMaximum);
        if (!providedMin)
            return providedMax;
        if (!providedMax)
            return providedMin;
        return getRandomValue(providedMin, providedMax);
    };
};
//# sourceMappingURL=dimension.js.map