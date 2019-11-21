export default NumericStepper;
declare class NumericStepper extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        inputFocused: boolean;
        value: number;
        displayValue: number;
    };
    componentDidMount(): void;
    changeValue: (value: any, event: any) => void;
    handleTypeQuantity: (event: any) => void;
    handleIncreaseValue: (event: any) => void;
    handleDecreaseValue: (event: any) => void;
    handleFocusInput: (e: any) => void;
    handleBlurInput: () => void;
    render(): JSX.Element;
}
declare namespace NumericStepper {
    export namespace propTypes {
        export const value: PropTypes.Requireable<number>;
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        export const minValue: PropTypes.Requireable<number>;
        export const maxValue: PropTypes.Requireable<number>;
        export const defaultValue: PropTypes.Requireable<number>;
        export const readOnly: PropTypes.Requireable<boolean>;
        export const size: PropTypes.Requireable<string>;
        export const block: PropTypes.Requireable<boolean>;
        export const label: PropTypes.Requireable<string>;
        export const lean: PropTypes.Requireable<boolean>;
    }
    export namespace defaultProps {
        const minValue_1: number;
        export { minValue_1 as minValue };
        const maxValue_1: number;
        export { maxValue_1 as maxValue };
        const defaultValue_1: number;
        export { defaultValue_1 as defaultValue };
        const readOnly_1: boolean;
        export { readOnly_1 as readOnly };
        const size_1: string;
        export { size_1 as size };
        const block_1: boolean;
        export { block_1 as block };
    }
}
import React from "react";
import PropTypes from "prop-types";
