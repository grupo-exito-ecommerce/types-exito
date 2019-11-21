import { Item, comparatorCurry } from './useTableTreeCheckboxes';
/**
 * Return new state with items toggled
 * @param state
 * @param item
 */
export declare function getToggledState(state: Array<Item>, item: Item, nodesKey: string, comparator: comparatorCurry): Array<Item>;
/**
 * Represents a tree section on a single array.
 */
export declare function getFlat(tree: Item, arr?: Array<Item>, nodesKey?: string): Partial<{
    [key: string]: any;
}>[];
