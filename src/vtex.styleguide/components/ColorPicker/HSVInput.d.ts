export default HSVInput;
/** HSVInput component */
declare class HSVInput extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    getValue: (event: any) => number;
    handleChange: (event: any, key: any) => void;
    render(): JSX.Element;
}
declare namespace HSVInput {
    export namespace propTypes {
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        export const color: PropTypes.Requireable<object>;
    }
}
import React from "react";
import PropTypes from "prop-types";
