import React, { FC } from 'react';
declare const DataTable: FC<DataTableProps>;
export declare type DataTableProps = {
    height: number;
    as?: 'table' | 'div' | 'section';
    className?: string;
    empty: boolean;
    loading?: boolean | {
        renderAs?: () => React.ReactNode;
    };
    emptyState?: {
        label?: string;
        children?: Element;
    };
};
export default DataTable;
