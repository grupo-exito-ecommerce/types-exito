import { BulkActionsProps } from '../BulkActions';
import { Column } from '../index';
export default function useTableBulkActions({ items, columns, bulkActions, comparator, }: BulkActionsInput): {
    /** constraints */
    hasPrimaryBulkAction: boolean;
    hasSecondaryBulkActions: boolean;
    /** state */
    bulkState: BulkState;
    /** data */
    bulkedColumns: Column[];
    /** handler fn */
    isRowSelected: (row: unknown) => boolean;
    selectAllRows: () => void;
    deselectAllRows: () => void;
    selectAllVisibleRows: () => void;
    selectRow: (row: unknown) => void;
    setSelectedRows: (selectedRows: unknown[]) => void;
    setAllLinesSelected: (allLinesSelected: boolean) => void;
};
export declare type BulkActionsInput = {
    items: Array<unknown>;
    comparator: comparatorCurry;
    columns: Array<Column>;
    bulkActions: BulkActionsProps;
    unicityKey: string;
};
declare type comparatorCurry = (item: any) => (candidate: any) => boolean;
export declare type BulkState = {
    selectedRows?: Array<unknown>;
    allLinesSelected?: boolean;
};
export {};
