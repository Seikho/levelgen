import { Options, Level, Cell, Coordinate } from '../index.d.ts';
import getDimension from './dimension';
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



export function generate(generateOptions?: Options): Level {
    const defaultMin = 50;
    const defaultMax = 100;
    
    const options = generateOptions || {};
    var dimension = getDimension(options, defaultMin, defaultMax);

    const width = dimension('width');
    const height = dimension('height');

    return createLevel(width, height);
}

function createLevel(width: number, height: number, id?: number): Level {
    const level: Level = {
        id: id || 0,
        map: []
    };

    for (var h = 0; height > h; h++) {
        var row = [];

        for (var w = 0; width > w; w++) {
            var coordinate = { row: h, column: w };
            var parent = row;

            row.push({
                coordinate,
                parent
            });
        }
    }

    return level;
}