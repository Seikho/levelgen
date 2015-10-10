import LG = require('../index.d.ts');

/**
 * FloodFill with configurable gap and direction
 * ... might blow the call stack on large levels :|
 * Returns a function that takes an array for directions
 * TODO: Tail call optimisation
 */
export function flood(level: LG.Level, gap: number, filler: { key: string, value: any }) {

    var canFill = isOccupiable(level, filler.key, gap);
    var fill = fillLevel(level, filler);
    var xform = (direction: LG.Coordinate) => transform(direction, gap);

    return function(directions: LG.Coordinate[]) {

        var tryFlood = (direction: LG.Coordinate) => {
            if (canFill(direction)) flood(xform(direction));
        }
        
        // Thunk!
        flood({ column: 0, row: 0 });

        function flood(coord?: LG.Coordinate) {
            coord = coord || { column: 0, row: 0 }

            if (canFill(coord)) fill(coord);
            directions.forEach(tryFlood);
        }

        return level;
    }
}

function isOccupiable(level: LG.Level, fillerKey: string, distance: number) {

    return (direction: LG.Coordinate) => {

        for (var x = 0; x <= distance; x++) {
            var target = transform(direction, x);
            var isOccupied = level.map[target.row][target.column][fillerKey] !== undefined;
            if (isOccupied) return false;
        }
        
        return true;
    }
}

function fillLevel(level: LG.Level, filler: { key: string, value: any }) {
    return (coordinate: LG.Coordinate) => level.map[coordinate.row][coordinate.column][filler.key] = filler.value;
}

function xy(x: number, y: number) {
    return {
        row: x,
        column: y
    };
}

function transform(direction: LG.Coordinate, amount: number) {
    var row = direction.row * amount;
    var column = direction.column * amount;

    return { row, column };
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

