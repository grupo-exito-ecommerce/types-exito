export default ColorHistory;
/**
 * ColorHistory Component
 */
declare class ColorHistory extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    /**
     * Render sigle color block
     */
    renderColorBlock: (colorInput: any) => JSX.Element;
    /**
     * Render a list of color blocks
     */
    renderColorList: (colorList: any) => any[];
    /**
     * Render ColorHistory component
     */
    render(): JSX.Element;
}
declare namespace ColorHistory {
    export namespace defaultProps {
        export const historyLength: number;
        export namespace defaultColor {
            export const hex: string;
        }
    }
    export namespace propTypes {
        export const colorHistory: PropTypes.Requireable<any[]>;
        const historyLength_1: PropTypes.Requireable<number>;
        export { historyLength_1 as historyLength };
        const defaultColor_1: PropTypes.Requireable<object>;
        export { defaultColor_1 as defaultColor };
        export const onColorChange: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
