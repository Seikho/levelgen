module.exports = function getRandomValue(min, max) {
    var difference = Math.abs(max - min);
    return Math.random() * difference + min;
};
//# sourceMappingURL=random.js.map