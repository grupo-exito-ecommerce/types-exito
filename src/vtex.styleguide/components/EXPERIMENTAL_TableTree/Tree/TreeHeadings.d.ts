import React from 'react';
import { CellProps, RowProps } from '../../EXPERIMENTAL_Table/DataTable/Row';
import { Column } from '../../EXPERIMENTAL_Table';
import useTableTreeCheckboxes from '../hooks/useTableTreeCheckboxes';
declare type TreeHeadingsProps = {
    columns: Array<Column>;
    items: any;
    rowProps?: RowProps;
    cellProps?: Pick<CellProps, 'as'>;
    checkboxes?: Partial<ReturnType<typeof useTableTreeCheckboxes>>;
};
declare const _default: React.NamedExoticComponent<TreeHeadingsProps>;
export default _default;
