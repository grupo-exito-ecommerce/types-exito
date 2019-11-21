export default Columns;
declare class Columns extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Columns {
    export namespace defaultProps {
        export const color: string;
        export const size: number;
        export const block: boolean;
    }
    export namespace propTypes {
        const color_1: PropTypes.Requireable<string>;
        export { color_1 as color };
        const size_1: PropTypes.Requireable<number>;
        export { size_1 as size };
        const block_1: PropTypes.Requireable<boolean>;
        export { block_1 as block };
    }
}
import React from "react";
import PropTypes from "prop-types";
