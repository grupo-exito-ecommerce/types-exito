export default Layout;
declare class Layout extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Layout {
    export namespace defaultProps {
        export const fullWidth: boolean;
    }
    export namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
        const fullWidth_1: PropTypes.Requireable<boolean>;
        export { fullWidth_1 as fullWidth };
        export const pageHeader: PropTypes.Validator<PropTypes.ReactNodeLike>;
    }
}
import React from "react";
import PropTypes from "prop-types";
