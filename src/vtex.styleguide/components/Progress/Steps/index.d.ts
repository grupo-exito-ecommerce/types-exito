export namespace ProgressStepsTypes {
    export const steps: PropTypes.Validator<string[]>;
    export const danger: PropTypes.Requireable<boolean>;
    export const slim: PropTypes.Requireable<boolean>;
}
export class ProgressSteps extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    isFirstElement(index: any): boolean;
    isLastElement(index: any, array: any): boolean;
    render(): JSX.Element;
}
export namespace ProgressSteps {
    export { ProgressStepsTypes as propTypes };
}
import PropTypes from "prop-types";
import React from "react";
