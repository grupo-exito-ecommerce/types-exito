export default Step;
declare class Step extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Step {
    export const propTypes: {
        type: PropTypes.Validator<string>;
        roundLeft: PropTypes.Requireable<boolean>;
        roundRight: PropTypes.Requireable<boolean>;
        danger: PropTypes.Requireable<boolean>;
        slim: PropTypes.Requireable<boolean>;
    };
}
import React from "react";
import PropTypes from "prop-types";
