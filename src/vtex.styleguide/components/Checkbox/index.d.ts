export default Checkbox;
declare class Checkbox extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    handleChange: (e: any) => any;
    render(): JSX.Element;
}
declare namespace Checkbox {
    export namespace defaultProps {
        export const checked: boolean;
        export const disabled: boolean;
        export const required: boolean;
        export const partial: boolean;
    }
    export namespace propTypes {
        const checked_1: PropTypes.Requireable<boolean>;
        export { checked_1 as checked };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        export const id: PropTypes.Validator<string>;
        export const label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const name: PropTypes.Validator<string>;
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        export const value: PropTypes.Requireable<string>;
        const partial_1: PropTypes.Requireable<boolean>;
        export { partial_1 as partial };
    }
}
import React from "react";
import PropTypes from "prop-types";
