export default Pagination;
declare class Pagination extends React.PureComponent<any, any, any> {
    constructor(props: any);
    state: {
        selectedRowsOptionIndex: number;
    };
    handleRowsChange: (e: any, value: any) => void;
    handlePrevPage: (e: any) => void;
    handleNextPage: (e: any) => void;
    createRowOptions: (rowsOptions: any) => any[];
    render(): JSX.Element;
}
declare namespace Pagination {
    export namespace defaultProps {
        export const rowsOptions: any;
    }
    export namespace propTypes {
        const rowsOptions_1: PropTypes.Requireable<any[]>;
        export { rowsOptions_1 as rowsOptions };
        export const currentItemFrom: PropTypes.Validator<number>;
        export const currentItemTo: PropTypes.Validator<number>;
        export const textOf: PropTypes.Validator<PropTypes.ReactNodeLike>;
        export const textShowRows: PropTypes.Validator<PropTypes.ReactNodeLike>;
        export const totalItems: PropTypes.Validator<number>;
        export const selectedOption: PropTypes.Requireable<number>;
        export const onRowsChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const onNextClick: PropTypes.Requireable<(...args: any[]) => any>;
        export const onPrevClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
