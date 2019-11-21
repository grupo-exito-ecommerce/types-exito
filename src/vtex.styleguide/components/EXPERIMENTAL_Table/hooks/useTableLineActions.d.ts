import { LineActionObject } from '../LineActions';
import { Items, Column } from '../index';
export default function useTableLineActions({ items, columns, lineActions, }: LineActionsData): {
    itemsWithLineActions: Object[];
    columnsWithLineActions: Column[];
};
export declare type LineActionsData = {
    items: Items;
    columns: Array<Column>;
    lineActions: Array<LineActionObject>;
};
