export default StrategySelector;
declare class StrategySelector extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    handleOperatorChange: (event: any) => void;
    render(): JSX.Element;
}
declare namespace StrategySelector {
    export namespace propTypes {
        export const operator: PropTypes.Requireable<string>;
        export const onChangeOperator: PropTypes.Requireable<(...args: any[]) => any>;
        export const labels: PropTypes.Requireable<PropTypes.InferProps<{
            operatorAll: PropTypes.Requireable<string>;
            operatorAny: PropTypes.Requireable<string>;
            headerPrefix: PropTypes.Requireable<string>;
            headerSufix: PropTypes.Requireable<string>;
        }>>;
    }
}
import React from "react";
import PropTypes from "prop-types";
