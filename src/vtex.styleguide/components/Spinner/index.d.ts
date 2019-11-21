export default Spinner;
declare class Spinner extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Spinner {
    export namespace propTypes {
        export const color: PropTypes.Requireable<string>;
        export const size: PropTypes.Requireable<number>;
        export const block: PropTypes.Requireable<boolean>;
    }
    export namespace defaultProps {
        const block_1: boolean;
        export { block_1 as block };
        const size_1: number;
        export { size_1 as size };
    }
}
import React from "react";
import PropTypes from "prop-types";
