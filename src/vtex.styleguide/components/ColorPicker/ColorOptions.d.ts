/**
 * ColorOptions Component
 */
declare class ColorOptions extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    /** Initial State */
    state: {
        currentInput: string;
    };
    /**
     * Handle input changes
     */
    handleOnChangeInput: (e: any) => void;
    /**
     * Render ColorOptions Component
     */
    render(): JSX.Element;
}
declare namespace ColorOptions {
    export namespace propTypes {
        export const color: PropTypes.Validator<object>;
        export const onColorChange: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export default ColorOptions;
import React from "react";
import PropTypes from "prop-types";
