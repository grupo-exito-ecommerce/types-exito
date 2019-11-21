import { Column } from '../index';
export default function useTableVisibility({ columns, hiddenColumns: initHiddenColumns, }: VisibilityData): {
    columns: Column[];
    visibleColumns: Column[];
    hiddenColumns: string[];
    toggleColumn: (id: string) => void;
    showAllColumns: () => void;
    hideAllColumns: () => void;
};
export declare type VisibilityData = {
    columns: Array<Column>;
    hiddenColumns?: Array<string>;
};
