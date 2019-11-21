import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { PaginationProps } from './Pagination';
import { Density } from './hooks/useTableMeasures';
declare const Table: FC<TableProps> & TableComposites;
export declare const measuresPropTypes: {
    tableHeight: PropTypes.Requireable<number>;
    rowHeight: PropTypes.Requireable<number>;
    selectedDensity: PropTypes.Requireable<Density>;
    setSelectedDensity: PropTypes.Requireable<(...args: any[]) => any>;
};
export declare const tablePropTypes: {
    measures: PropTypes.Requireable<PropTypes.InferProps<{
        tableHeight: PropTypes.Requireable<number>;
        rowHeight: PropTypes.Requireable<number>;
        selectedDensity: PropTypes.Requireable<Density>;
        setSelectedDensity: PropTypes.Requireable<(...args: any[]) => any>;
    }>>;
    containerHeight: PropTypes.Requireable<number>;
    empty: PropTypes.Requireable<boolean>;
    columns: PropTypes.Requireable<PropTypes.InferProps<{
        id: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        width: PropTypes.Requireable<number>;
        cellRender: PropTypes.Requireable<(...args: any[]) => any>;
        headerRender: PropTypes.Requireable<(...args: any[]) => any>;
    }>[]>;
    items: PropTypes.Requireable<object[]>;
    loading: PropTypes.Requireable<boolean | PropTypes.InferProps<{
        renderAs: PropTypes.Requireable<(...args: any[]) => any>;
    }>>;
    itemsSizeEstimate: PropTypes.Requireable<number>;
    onRowClick: PropTypes.Requireable<(...args: any[]) => any>;
    isRowActive: PropTypes.Requireable<(...args: any[]) => any>;
    emptyState: PropTypes.Requireable<PropTypes.InferProps<{
        label: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
    }>>;
};
export declare type TableProps = InferProps<typeof tablePropTypes>;
export declare type TableComposites = {
    Toolbar: FC;
    FilterBar?: FC;
    Pagination?: FC<PaginationProps>;
    BulkActions?: FC;
};
export declare type Items = Array<unknown>;
export declare type CellData = {
    cellData: unknown;
    rowData: unknown;
    rowHeight: number;
    selectedDensity: Density;
};
export declare type Column = {
    id?: string;
    title?: string;
    width?: number;
    cellRenderer?: (cellData: CellData) => React.ReactNode;
    headerRenderer?: ({ columnData: unknown }: {
        columnData: any;
    }) => React.ReactNode;
};
export default Table;
