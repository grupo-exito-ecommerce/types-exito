export default EXPERIMENTAL_Conditions;
/**
 * @visibleName Conditions
 */
declare class EXPERIMENTAL_Conditions extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    objectIsEmpty: (object: any) => boolean;
    canAddNewCondition: () => boolean;
    handleAddNewCondition: () => void;
    handleRemoveStatement: (index: any) => void;
    handleChangeStatement: (statementIndex: any, newValue: any, structure: any) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
declare namespace EXPERIMENTAL_Conditions {
    export namespace defaultProps {
        export const operator: string;
        export const showOperator: boolean;
        export const statements: any[];
        export function onChangeOperator(): void;
        export function onChangeStatements(): void;
        export namespace labels {
            export const operatorAll: string;
            export const operatorAnd: string;
            export const operatorAny: string;
            export const operatorOr: string;
            export const headerPrefix: string;
            export const headerSufix: string;
            export const addConditionBtn: string;
            export const noConditions: string;
            export const addNewCondition: string;
        }
    }
    export namespace propTypes {
        export const canDelete: PropTypes.Requireable<boolean>;
        const operator_1: PropTypes.Requireable<string>;
        export { operator_1 as operator };
        const statements_1: PropTypes.Requireable<PropTypes.InferProps<{
            subject: PropTypes.Requireable<string>;
            verb: PropTypes.Requireable<string>;
            object: PropTypes.Requireable<any>;
            error: PropTypes.Requireable<any>;
        }>[]>;
        export { statements_1 as statements };
        export const options: PropTypes.Validator<object>;
        export const subjectPlaceholder: PropTypes.Validator<string>;
        export const isFullWidth: PropTypes.Requireable<boolean>;
        const onChangeStatements_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChangeStatements_1 as onChangeStatements };
        const onChangeOperator_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChangeOperator_1 as onChangeOperator };
        export const isRtl: PropTypes.Requireable<boolean>;
        const showOperator_1: PropTypes.Requireable<boolean>;
        export { showOperator_1 as showOperator };
        const labels_1: PropTypes.Requireable<PropTypes.InferProps<{
            addNewCondition: PropTypes.Requireable<string>;
            addConditionBtn: PropTypes.Requireable<string>;
            delete: PropTypes.Requireable<string>;
            noConditions: PropTypes.Requireable<string>;
            operatorAll: PropTypes.Requireable<string>;
            operatorAnd: PropTypes.Requireable<string>;
            operatorAny: PropTypes.Requireable<string>;
            operatorOr: PropTypes.Requireable<string>;
            headerPrefix: PropTypes.Requireable<string>;
            headerSufix: PropTypes.Requireable<string>;
        }>>;
        export { labels_1 as labels };
    }
}
import React from "react";
import PropTypes from "prop-types";
