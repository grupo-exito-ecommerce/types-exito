declare class Slider extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    sliderRef: React.RefObject<any>;
    state: {
        dragging: any;
        translate: {
            left: number;
            right: number;
        };
        values: {
            left: any;
            right: any;
        };
    };
    componentDidUpdate(prevProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    cancelDragEvent_: () => void;
    updateLayout: () => void;
    getValueForPercent: (percentageComplete: any, position: any) => any;
    getTranslateValueForInputValue: (value: any, position: any) => number;
    handleSliderMouseDown: (e: any) => void;
    handleDragStart: (position: any) => (e: any) => void;
    valuesBeforeDrag_: {
        left: any;
        right: any;
    };
    updatePositionFromEvent: (e: any, position: any) => void;
    handleDrag: (position: any) => (e: any) => void;
    updatePositionForValue: (value: any, position: any) => void;
    handleDragEnd: () => void;
    handleKeyDown: (evt: any) => void;
    cancelDragEvent: any;
    render(): JSX.Element;
}
declare namespace Slider {
    export namespace defaultProps {
        export const min: number;
        export const max: number;
        export const step: number;
        export function onChange(): void;
        export const alwaysShowCurrentValue: boolean;
        export function formatValue(a: any): any;
        export const range: boolean;
        export const handleIcon: any;
    }
    export namespace propTypes {
        const min_1: PropTypes.Requireable<number>;
        export { min_1 as min };
        const max_1: PropTypes.Requireable<number>;
        export { max_1 as max };
        const onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
        const step_1: PropTypes.Requireable<number>;
        export { step_1 as step };
        export const disabled: PropTypes.Requireable<boolean>;
        export const defaultValues: PropTypes.Requireable<number[]>;
        const alwaysShowCurrentValue_1: PropTypes.Requireable<boolean>;
        export { alwaysShowCurrentValue_1 as alwaysShowCurrentValue };
        const formatValue_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { formatValue_1 as formatValue };
        const range_1: PropTypes.Requireable<boolean>;
        export { range_1 as range };
        const handleIcon_1: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export { handleIcon_1 as handleIcon };
    }
}
export default Slider;
import React from "react";
import PropTypes from "prop-types";
