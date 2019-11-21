export default HexInput;
/** HexInput Component */
declare class HexInput extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        inputValue: string;
        error: boolean;
    };
    handleChange: (e: any) => void;
    validation: (color: any) => boolean;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    updateInputValue(): void;
    render(): JSX.Element;
}
declare namespace HexInput {
    export namespace defaultProps {
        export const errorMessage: string;
        export const disable: boolean;
    }
    export namespace propTypes {
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const rgb: PropTypes.Requireable<object>;
        const errorMessage_1: PropTypes.Requireable<string>;
        export { errorMessage_1 as errorMessage };
        export const disabled: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
