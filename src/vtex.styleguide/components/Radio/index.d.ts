export default Radio;
declare class Radio extends React.PureComponent<any, any, any> {
    constructor(props: any);
    radio: React.RefObject<any>;
    container: React.RefObject<any>;
    handleContainerClick: (e: any) => void;
    render(): JSX.Element;
}
declare namespace Radio {
    export namespace defaultProps {
        export const checked: boolean;
        export const disabled: boolean;
        export const required: boolean;
    }
    export namespace propTypes {
        const checked_1: PropTypes.Requireable<boolean>;
        export { checked_1 as checked };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        export const id: PropTypes.Validator<string>;
        export const isLast: any;
        export const label: PropTypes.Validator<PropTypes.ReactNodeLike>;
        export const name: PropTypes.Validator<string>;
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        export const value: PropTypes.Validator<React.ReactText>;
    }
}
import React from "react";
import PropTypes from "prop-types";
