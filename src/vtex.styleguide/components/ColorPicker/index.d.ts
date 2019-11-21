export default ColorPicker;
/**
 * ColorPicker Component
 */
declare class ColorPicker extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        showOptions: boolean;
    };
    validColor(): {
        rgba: any;
        hsva: any;
        hex: any;
    };
    handleColorChange: (color: any) => void;
    handleOutsideClick: () => void;
    handleShowOptions: () => void;
    render(): JSX.Element;
}
declare namespace ColorPicker {
    export namespace defaultProps {
        export const label: string;
    }
    export namespace propTypes {
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        export const title: PropTypes.Requireable<string>;
        export const color: PropTypes.Validator<PropTypes.InferProps<{
            /** RGBA color format */
            rgba: PropTypes.Requireable<object>;
            /** HSVA color format */
            hsva: PropTypes.Requireable<object>;
            /** HEX color format */
            hex: PropTypes.Requireable<string>;
        }>>;
        export const colorHistory: PropTypes.Validator<any[]>;
        export const disabled: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
