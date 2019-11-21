export default CheckboxContainer;
declare class CheckboxContainer extends React.Component<any, any, any> {
    static defaultProps: {
        partial: boolean;
        disabled: boolean;
    };
    static propTypes: {
        checked: PropTypes.Validator<boolean>;
        partial: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Validator<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        id: PropTypes.Requireable<React.ReactText>;
    };
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
import React from "react";
import PropTypes from "prop-types";
