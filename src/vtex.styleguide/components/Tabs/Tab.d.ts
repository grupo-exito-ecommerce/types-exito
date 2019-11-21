export default Tab;
declare class Tab extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    handleClick: (e: any) => void;
    render(): JSX.Element;
}
declare namespace Tab {
    export namespace defaultProps {
        export const disabled: boolean;
    }
    export namespace propTypes {
        export const active: PropTypes.Requireable<boolean>;
        export const fullWidth: PropTypes.Requireable<boolean>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const label: PropTypes.Validator<any>;
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
    }
}
import React from "react";
import PropTypes from "prop-types";
