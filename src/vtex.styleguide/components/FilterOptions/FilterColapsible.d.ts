export default FilterColapsible;
declare class FilterColapsible extends React.PureComponent<any, any, any> {
    constructor(props: any);
    state: {
        isCollapsibleOpen: any;
    };
    handleChangeStatement: (newValue: any, structure: any) => any;
    render(): JSX.Element;
}
declare namespace FilterColapsible {
    export namespace defaultProps {
        export const statement: {
            subject: any;
            verb: any;
            object: any;
            error: any;
        };
    }
    export namespace propTypes {
        export const options: PropTypes.Validator<object>;
        export const subject: PropTypes.Validator<string>;
        const statement_1: PropTypes.Requireable<{
            [x: string]: PropTypes.InferProps<{
                subject: PropTypes.Requireable<string>;
                verb: PropTypes.Validator<string>;
                object: PropTypes.Requireable<object>;
                error: PropTypes.Requireable<any>;
            }>;
        }>;
        export { statement_1 as statement };
        export const onChangeStatement: PropTypes.Validator<(...args: any[]) => any>;
        export const beginWithOpenCollapsibles: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
