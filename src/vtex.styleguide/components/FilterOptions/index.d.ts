export default FilterOptions;
declare class FilterOptions extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    handleStatementChange: (statement: any) => void;
    extractStatement: (statements: any, subject: any) => any;
    createEmptyStatement: (subject: any, options: any) => {
        subject: any;
        verb: any;
        object: any;
        error: any;
    };
    render(): JSX.Element;
}
declare namespace FilterOptions {
    export namespace defaultProps {
        export const options: any[];
    }
    export namespace propTypes {
        const options_1: PropTypes.Validator<{
            [x: string]: PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                verbs: PropTypes.Validator<any[]>;
            }>;
        }>;
        export { options_1 as options };
        export const statements: PropTypes.Requireable<PropTypes.InferProps<{
            subject: PropTypes.Requireable<string>;
            verb: PropTypes.Validator<string>;
            object: PropTypes.Requireable<any>;
            error: PropTypes.Requireable<any>;
        }>[]>;
        export const onChangeStatements: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
