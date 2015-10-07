/**
 * FloodFill with configurable gap and direction
 * ... might blow the call stack on large levels :|
 * Returns a function that takes an array for directions
 * TODO: Tail call optimisation
 */
function flood(level, gap, filler) {
    var canFlood = isFree(level, filler.key, gap);
    var fill = fillLevel(level, filler);
    var xform = function (direction) { return transform(direction, gap); };
    return function (directions) {
        var tryFlood = function (direction) {
            if (canFlood(direction))
                flood(xform(direction));
        };
        // Thunk!
        flood({ column: 0, row: 0 });
        function flood(coord) {
            coord = coord || { column: 0, row: 0 };
            if (canFlood(coord))
                fill(coord);
            directions.forEach(tryFlood);
        }
        return level;
    };
}
exports.flood = flood;
function isFree(level, fillerKey, distance) {
    return function (direction) {
        var target = transform(direction, distance);
        return level.map[target.row][target.column][fillerKey] != null;
    };
}
function fillLevel(level, filler) {
    return function (coordinate) { return level.map[coordinate.row][coordinate.column][filler.key] = filler.value; };
}
function xy(x, y) {
    return {
        row: x,
        column: y
    };
}
function transform(direction, amount) {
    var row = direction.row * amount;
    var column = direction.column * amount;
    return { row: row, column: column };
}
var dirs = {
    north: xy(0, -1),
    south: xy(0, 1),
    east: xy(1, 0),
    west: xy(-1, 0),
    ne: xy(1, -1),
    nw: xy(-1, -1),
    se: xy(1, 1),
    sw: xy(-1, 1)
};
//# sourceMappingURL=flood.js.map