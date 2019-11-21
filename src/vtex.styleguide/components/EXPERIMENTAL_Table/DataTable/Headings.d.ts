import React from 'react';
import { CellProps, RowProps } from './Row';
import { Column } from '../index';
declare type HeadingsProps = {
    columns?: Array<Column>;
    rowProps?: RowProps;
    cellProps?: Pick<CellProps, 'as'>;
};
declare const _default: React.NamedExoticComponent<HeadingsProps>;
export default _default;
