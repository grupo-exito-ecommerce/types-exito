export default Separator;
declare class Separator extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Separator {
    export namespace propTypes {
        export const label: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
