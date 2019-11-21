export default BulkActions;
declare class BulkActions extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace BulkActions {
    export namespace defaultProps {
        export const hasPrimaryBulkAction: boolean;
        export const hasSecondaryBulkActions: boolean;
        export const allLinesSelected: boolean;
        export const selectedRows: any[];
        export const bulkActions: {};
        export function onSelectAllLines(): void;
    }
    export namespace propTypes {
        const hasPrimaryBulkAction_1: PropTypes.Requireable<boolean>;
        export { hasPrimaryBulkAction_1 as hasPrimaryBulkAction };
        const hasSecondaryBulkActions_1: PropTypes.Requireable<boolean>;
        export { hasSecondaryBulkActions_1 as hasSecondaryBulkActions };
        const allLinesSelected_1: PropTypes.Requireable<boolean>;
        export { allLinesSelected_1 as allLinesSelected };
        const selectedRows_1: PropTypes.Requireable<any[]>;
        export { selectedRows_1 as selectedRows };
        const bulkActions_1: PropTypes.Requireable<object>;
        export { bulkActions_1 as bulkActions };
        const onSelectAllLines_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onSelectAllLines_1 as onSelectAllLines };
        export const onDeselectAllLines: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
