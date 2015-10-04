export function generate(options: Options);

export interface Options {
    
    /** Fixed width. Overrides min/max width */
    width?: number;

    minWidth?: number;
    maxWidth?: number;
    
    /** Fixed height. Overrides min/max height */
    height?: number;

    minHeight?: number;
    maxHeight?: number;
    
    /** Fixed depth. Overrides min/max depth */
    depth?: number;

    minDepth?: number;
    maxDepth?: number;
}

export interface Level {
    id: number;
    map: Cell[][];
}


export interface Cell {
    coordinate: Coordinate;
    
    /** Referece to parent Row */
    parent: Level;
    
    /** Referece to north cell */
    up?: Cell;
    
    /** Referece to south cell */
    down?: Cell;
    
    /** Referece to west cell */
    left?: Cell;
    
    /** Referece to east cell */
    right?: Cell;
    
    /** Referece to above cell */
    above?: Cell;
    
    /** Referece to below cell */
    below?: Cell;
    
    [key: string]: any;
}

export interface Coordinate {
    
    /** Zero-based */
    row: number;
    
    /** Zero-based */
    column: number;
}