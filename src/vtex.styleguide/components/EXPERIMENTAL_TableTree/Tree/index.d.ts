import React from 'react';
import useTableTreeCheckboxes, { comparatorCurry } from '../hooks/useTableTreeCheckboxes';
import { Column, Items } from '../../EXPERIMENTAL_Table';
import { Density } from '../../EXPERIMENTAL_Table/hooks/useTableMeasures';
declare type TreeProps = {
    items: Items;
    selectedDensity: Density;
    nodesKey: string;
    columns: Array<Column>;
    comparator: comparatorCurry;
    rowHeight: number;
    checkboxes?: Partial<ReturnType<typeof useTableTreeCheckboxes>>;
    onRowClick?: ({ rowData: unknown }: {
        rowData: any;
    }) => void;
};
declare const _default: React.NamedExoticComponent<TreeProps>;
export default _default;
