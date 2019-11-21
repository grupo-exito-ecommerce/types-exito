export default ButtonGroup;
declare class ButtonGroup extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace ButtonGroup {
    export const defaultProps: {};
    export namespace propTypes {
        export const buttons: import("prop-types").Requireable<import("prop-types").InferProps<{
            type: import("prop-types").Requireable<any>;
        }> | import("prop-types").InferProps<{
            type: import("prop-types").Requireable<any>;
        }>[]>;
    }
}
import React from "react";
