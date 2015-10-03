export function generate(options: Options);

export interface Options {
    width?: number;
    maxWidth?: number;
    
    height?: number;
    maxHeight?: number;
    
    depth?: number;
    maxDepth?: number;
}

export interface Level {
    id: number;
    
}

export interface Row {
    id: number;
    /** Reference to parent Level */
    parent: Row;
    cells: Array<Cell>;
}

export interface Cell {
    id: number;
    /** Referece to parent Row */
    parent: Row;
}

export interface Coordinate {
    /** Zero-based */
    row: number;
    /** Zero-based */
    cell: number;
    
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
    
    [index: string]: any;
}