"use strict";
var dimension_1 = require('./dimension');
/**
 *   The algorithm

    In this algorithm a "feature" is taken to mean any kind of map component e.g. large room, small room, corridor, circular arena, vault etc.
    1. Fill the whole map with solid earth
    2. Dig out a single room in the centre of the map
    3. Pick a wall of any room
    4. Decide upon a new feature to build
    5. See if there is room to add the new feature through the chosen wall
    6. If yes, continue. If no, go back to step 3
    7. Add the feature through the chosen wall
    8. Go back to step 3, until the dungeon is complete
    9. Add the up and down staircases at random points in map
    10. Finally, sprinkle some monsters and items liberally over dungeon
 */
function generate(generateOptions) {
    var defaultMin = 50;
    var defaultMax = 100;
    var options = generateOptions || {};
    var dimension = dimension_1.default(options, defaultMin, defaultMax);
    var width = dimension('width');
    var height = dimension('height');
    return createLevel(width, height);
}
exports.generate = generate;
function createLevel(width, height, id) {
    var level = {
        id: id || 0,
        map: []
    };
    for (var h = 0; height > h; h++) {
        var row = [];
        for (var w = 0; width > w; w++) {
            var coordinate = { row: h, column: w };
            var parent = row;
            row.push({
                coordinate: coordinate,
                parent: parent
            });
        }
    }
    return level;
}
//# sourceMappingURL=index.js.map