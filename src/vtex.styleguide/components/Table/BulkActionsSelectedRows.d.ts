export default BulkActionsSelectedRows;
declare class BulkActionsSelectedRows extends Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    shouldComponentUpdate(nextProps: any): boolean;
    render(): any;
}
declare namespace BulkActionsSelectedRows {
    export namespace propTypes {
        export const selectedRowsLength: PropTypes.Validator<number>;
    }
}
import { Component } from "react";
import PropTypes from "prop-types";
