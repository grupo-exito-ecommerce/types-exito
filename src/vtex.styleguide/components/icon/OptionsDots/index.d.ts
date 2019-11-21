export default OptionsDots;
declare class OptionsDots extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace OptionsDots {
    export namespace defaultProps {
        export const color: string;
        export const size: number;
        export const radius: number;
        export const block: boolean;
    }
    export namespace propTypes {
        const color_1: PropTypes.Requireable<string>;
        export { color_1 as color };
        const radius_1: PropTypes.Requireable<number>;
        export { radius_1 as radius };
        const size_1: PropTypes.Requireable<number>;
        export { size_1 as size };
        const block_1: PropTypes.Requireable<boolean>;
        export { block_1 as block };
    }
}
import React from "react";
import PropTypes from "prop-types";
