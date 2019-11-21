export default RadioGroup;
declare class RadioGroup extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    handleChange: (event: any) => void;
    render(): JSX.Element;
}
declare namespace RadioGroup {
    export namespace propTypes {
        export const options: PropTypes.Validator<PropTypes.InferProps<{
            value: PropTypes.Validator<React.ReactText>;
            label: PropTypes.Validator<PropTypes.ReactNodeLike>;
            disabled: PropTypes.Requireable<boolean>;
        }>[]>;
        export const name: PropTypes.Validator<string>;
        export const value: PropTypes.Requireable<React.ReactText>;
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        export const disabled: PropTypes.Requireable<boolean>;
        export const hideBorder: PropTypes.Requireable<boolean>;
    }
    export namespace defaultProps {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const hideBorder_1: boolean;
        export { hideBorder_1 as hideBorder };
    }
}
import React from "react";
import PropTypes from "prop-types";
