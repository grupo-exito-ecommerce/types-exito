export default RGBInput;
/**
 * RGBInput Component
 */
declare class RGBInput extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    getValue: (event: any) => number;
    handleChange: (event: any, key: any) => void;
    render(): JSX.Element;
}
declare namespace RGBInput {
    export namespace propTypes {
        export const onChange: any;
        export const color: any;
    }
}
import React from "react";
