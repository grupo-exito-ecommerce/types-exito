export default Clear;
declare class Clear extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Clear {
    export namespace defaultProps {
        export const size: number;
        export const color: string;
    }
    export namespace propTypes {
        const size_1: PropTypes.Validator<number>;
        export { size_1 as size };
        const color_1: PropTypes.Validator<string>;
        export { color_1 as color };
    }
}
import React from "react";
import PropTypes from "prop-types";
