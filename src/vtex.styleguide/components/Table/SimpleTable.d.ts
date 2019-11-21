export default SimpleTable;
declare class SimpleTable extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        hoverRowIndex: number;
        tableHeight: number;
    };
    _cache: any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateTableHeight(): void;
    toggleSortType: (key: any) => {
        sortOrder: any;
        sortedBy: any;
    };
    handleRowHover: (rowIndex: any) => void;
    calculateColWidth: (schema: any, properties: any, index: any, fullWidth: any, fullWidthColWidth: any) => any;
    calculateRowHeight: (index: any) => any;
    addLineActionsToSchema: (schema: any, lineActions: any) => any;
    getScrollbarWidth: () => number;
    calculateContainerHeight: () => number;
    render(): JSX.Element;
}
declare namespace SimpleTable {
    export namespace defaultProps {
        export const indexColumnLabel: any;
        export const fixFirstColumn: boolean;
        export const items: any[];
        export const disableHeader: boolean;
        export namespace sort {
            export const sortOrder: any;
            export const sortedBy: any;
        }
        export const fullWidth: boolean;
        export const dynamicRowHeight: boolean;
        export const selectedRowsIndexes: any[];
        export function onRowHover(): void;
    }
    export namespace propTypes {
        const items_1: PropTypes.Validator<any[]>;
        export { items_1 as items };
        export const schema: PropTypes.Validator<object>;
        const indexColumnLabel_1: PropTypes.Requireable<string>;
        export { indexColumnLabel_1 as indexColumnLabel };
        const fixFirstColumn_1: PropTypes.Requireable<boolean>;
        export { fixFirstColumn_1 as fixFirstColumn };
        export const density: PropTypes.Requireable<string>;
        const disableHeader_1: PropTypes.Requireable<boolean>;
        export { disableHeader_1 as disableHeader };
        export const onRowClick: PropTypes.Requireable<(...args: any[]) => any>;
        const onRowHover_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onRowHover_1 as onRowHover };
        export const emptyStateLabel: PropTypes.Requireable<string>;
        export const emptyStateChildren: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const sort_1: PropTypes.Requireable<PropTypes.InferProps<{
            sortOrder: PropTypes.Requireable<string>;
            sortedBy: PropTypes.Requireable<string>;
            preferentialSortOrder: PropTypes.Requireable<string>;
        }>>;
        export { sort_1 as sort };
        export const onSort: PropTypes.Requireable<(...args: any[]) => any>;
        export const updateTableKey: PropTypes.Requireable<string>;
        export const containerHeight: PropTypes.Requireable<number>;
        export const rowHeight: PropTypes.Validator<number>;
        const dynamicRowHeight_1: PropTypes.Requireable<boolean>;
        export { dynamicRowHeight_1 as dynamicRowHeight };
        const fullWidth_1: PropTypes.Requireable<boolean>;
        export { fullWidth_1 as fullWidth };
        export const lineActions: PropTypes.Requireable<PropTypes.InferProps<{
            label: PropTypes.Requireable<(...args: any[]) => any>;
            isDangerous: PropTypes.Requireable<boolean>;
            onClick: PropTypes.Requireable<(...args: any[]) => any>;
        }>[]>;
        export const loading: PropTypes.Requireable<boolean>;
        const selectedRowsIndexes_1: PropTypes.Requireable<any[]>;
        export { selectedRowsIndexes_1 as selectedRowsIndexes };
    }
}
import React from "react";
import PropTypes from "prop-types";
