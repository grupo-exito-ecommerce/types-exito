export default EmptyState;
declare class EmptyState extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace EmptyState {
    export namespace propTypes {
        export function title(props: any, propName: any, componentName: any): Error;
        export function children(props: any, propName: any, componentName: any): Error;
        export const testId: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
