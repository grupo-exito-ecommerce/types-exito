export default Table;
declare class Table extends React.PureComponent<any, any, any> {
    constructor(props: any);
    state: {
        hiddenFields: any[];
        tableRowHeight: number;
        selectedDensity: any;
        allChecked: boolean;
        selectedRows: any;
        allLinesSelected: boolean;
    };
    componentDidUpdate(): void;
    getInitialHiddenFieldsFromSchema: (schema: any) => any[];
    getRowHeight: (density: any) => 32 | 76 | 48 | 45;
    handleTableRowHeight: (density: any) => void;
    handleToggleColumn: (key: any) => void;
    handleShowAllColumns: () => void;
    handleHideAllColumns: () => void;
    handleSelectionChange: () => void;
    handleSelectAllLines: () => void;
    handleSelectAllVisibleLines: () => void;
    handleSelectLine: (rowData: any) => void;
    handleDeselectAllLines: () => void;
    handleInputSearchClearWithBulkAction: (event: any) => void;
    render(): JSX.Element;
}
declare namespace Table {
    export namespace defaultProps {
        export const loading: boolean;
        export const density: string;
        export const fixFirstColumn: boolean;
        export const toolbar: any;
        export const emptyStateLabel: string;
        export const fullWidth: boolean;
        export const bulkActions: {};
        export const totalizers: any[];
    }
    export namespace propTypes {
        export const items: PropTypes.Validator<any[]>;
        export const schema: PropTypes.Validator<object>;
        export const disableHeader: PropTypes.Requireable<boolean>;
        const fixFirstColumn_1: PropTypes.Requireable<boolean>;
        export { fixFirstColumn_1 as fixFirstColumn };
        export const onRowClick: PropTypes.Requireable<(...args: any[]) => any>;
        export const onRowHover: PropTypes.Requireable<(...args: any[]) => any>;
        export const sort: PropTypes.Requireable<PropTypes.InferProps<{
            sortOrder: PropTypes.Requireable<string>;
            sortedBy: PropTypes.Requireable<string>;
        }>>;
        export const onSort: PropTypes.Requireable<(...args: any[]) => any>;
        export const updateTableKey: PropTypes.Requireable<string>;
        export const containerHeight: PropTypes.Requireable<number>;
        const density_1: PropTypes.Requireable<string>;
        export { density_1 as density };
        const emptyStateLabel_1: PropTypes.Requireable<string>;
        export { emptyStateLabel_1 as emptyStateLabel };
        export const emptyStateChildren: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const fullWidth_1: PropTypes.Requireable<boolean>;
        export { fullWidth_1 as fullWidth };
        export const dynamicRowHeight: PropTypes.Requireable<boolean>;
        export const lineActions: PropTypes.Requireable<PropTypes.InferProps<{
            /** Function that returns a string for the action label */
            label: PropTypes.Requireable<(...args: any[]) => any>;
            /** Mark whether the action performs a dangerous option or not */
            isDangerous: PropTypes.Requireable<boolean>;
            /** Handles the callback function of the action */
            onClick: PropTypes.Requireable<(...args: any[]) => any>;
        }>[]>;
        const loading_1: PropTypes.Requireable<boolean>;
        export { loading_1 as loading };
        const toolbar_1: PropTypes.Requireable<PropTypes.InferProps<{
            inputSearch: PropTypes.Requireable<PropTypes.InferProps<{
                onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
                onClear: PropTypes.Requireable<(...args: any[]) => any>;
            }>>;
            density: PropTypes.Requireable<PropTypes.InferProps<{
                buttonLabel: PropTypes.Requireable<string>;
                lowOptionLabel: PropTypes.Requireable<string>;
                mediumOptionLabel: PropTypes.Requireable<string>;
                highOptionLabel: PropTypes.Requireable<string>;
                alignMenu: PropTypes.Requireable<string>;
                handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
            }>>;
            fields: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                showAllLabel: PropTypes.Requireable<string>;
                hideAllLabel: PropTypes.Requireable<string>;
                alignMenu: PropTypes.Requireable<string>;
            }>>;
            download: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
                disabled: PropTypes.Requireable<boolean>;
            }>>;
            upload: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
                disabled: PropTypes.Requireable<boolean>;
            }>>;
            extraActions: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                actions: PropTypes.Requireable<PropTypes.InferProps<{
                    label: PropTypes.Requireable<string>;
                    handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
                }>[]>;
                alignMenu: PropTypes.Requireable<string>;
            }>>;
            newLine: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Validator<string>;
                handleCallback: PropTypes.Validator<(...args: any[]) => any>;
                disabled: PropTypes.Requireable<boolean>;
            }>>;
        }>>;
        export { toolbar_1 as toolbar };
        export const pagination: PropTypes.Requireable<PropTypes.InferProps<{
            onNextClick: PropTypes.Requireable<(...args: any[]) => any>;
            onPrevClick: PropTypes.Requireable<(...args: any[]) => any>;
            currentItemFrom: PropTypes.Requireable<number>;
            currentItemTo: PropTypes.Requireable<number>;
            textOf: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            totalItems: PropTypes.Requireable<number>;
        }>>;
        const bulkActions_1: PropTypes.Requireable<PropTypes.InferProps<{
            texts: PropTypes.Requireable<PropTypes.InferProps<{
                secondaryActionsLabel: PropTypes.Validator<string>;
                rowsSelected: PropTypes.Validator<(...args: any[]) => any>;
                selectAll: PropTypes.Requireable<string>;
                allRowsSelected: PropTypes.Requireable<(...args: any[]) => any>;
            }>>;
            totalItems: PropTypes.Requireable<number>;
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            selectedRows: PropTypes.Requireable<any[]>;
            main: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Validator<string>;
                handleCallback: PropTypes.Validator<(...args: any[]) => any>;
            }>>;
            others: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Validator<string>;
                handleCallback: PropTypes.Validator<(...args: any[]) => any>;
            }>[]>;
            fixed: PropTypes.Requireable<boolean>;
        }>>;
        export { bulkActions_1 as bulkActions };
        const totalizers_1: PropTypes.Requireable<any[]>;
        export { totalizers_1 as totalizers };
        export const filters: PropTypes.Requireable<PropTypes.InferProps<any>>;
    }
}
import React from "react";
import PropTypes from "prop-types";
