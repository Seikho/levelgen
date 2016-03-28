"use strict";
/**
 * Generate a random value between the two values provided
 */
function getRandomValue(min, max) {
    var difference = Math.abs(max - min);
    return Math.random() * difference + min;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getRandomValue;
//# sourceMappingURL=random.js.map