import React from 'react';
import { RowProps, CellProps } from './Row';
import { Column, Items } from '../index';
import { Density } from '../hooks/useTableMeasures';
export declare type RowsProps = {
    columns: Array<Column>;
    items: Items;
    selectedDensity: Density;
    onRowClick?: ({ rowData: unknown }: {
        rowData: any;
    }) => void;
    isRowActive?: (rowData: unknown) => boolean;
    rowProps?: RowProps;
    rowHeight: number;
    cellProps?: Pick<CellProps, 'as' | 'className'>;
};
declare const _default: React.NamedExoticComponent<RowsProps>;
export default _default;
