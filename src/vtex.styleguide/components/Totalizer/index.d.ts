export default Totalizer;
declare class Totalizer extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Totalizer {
    export namespace defaultProps {
        export const value: any;
        export const iconBackgroundColor: string;
        export const icon: any;
        export const isLoading: boolean;
    }
    export namespace propTypes {
        export const items: PropTypes.Validator<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            value: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            iconBackgroundColor: PropTypes.Requireable<string>;
            icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            isLoading: PropTypes.Requireable<boolean>;
        }>[]>;
    }
}
import React from "react";
import PropTypes from "prop-types";
