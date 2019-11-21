import { FC } from 'react';
import PropTypes from 'prop-types';
import { TableComposites } from '../EXPERIMENTAL_Table';
import { InferProps } from 'prop-types';
declare const TableTree: FC<Props> & TableComposites;
declare const propTypes: {
    checkboxes: PropTypes.Requireable<PropTypes.InferProps<{
        checkedItems: PropTypes.Requireable<PropTypes.InferProps<{
            id: PropTypes.Requireable<string>;
        }>[]>;
        itemTree: PropTypes.Requireable<PropTypes.InferProps<{
            id: PropTypes.Requireable<string>;
        }>>;
        toggle: PropTypes.Requireable<(...args: any[]) => any>;
        isChecked: PropTypes.Requireable<(...args: any[]) => any>;
        isPartiallyChecked: PropTypes.Requireable<(...args: any[]) => any>;
    }>>;
    measures: PropTypes.Requireable<PropTypes.InferProps<{
        tableHeight: PropTypes.Requireable<number>;
        rowHeight: PropTypes.Requireable<number>;
        selectedDensity: PropTypes.Requireable<import("../EXPERIMENTAL_Table/hooks/useTableMeasures").Density>;
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
    nodesKey: PropTypes.Requireable<string>;
    comparator: PropTypes.Requireable<(...args: any[]) => any>;
};
declare type Props = InferProps<typeof propTypes>;
export declare type TreeState = {
    collapsedItems: Array<string>;
    toggleCollapsed: (id: string) => void;
    isCollapsed: (id: string) => boolean;
};
export default TableTree;
