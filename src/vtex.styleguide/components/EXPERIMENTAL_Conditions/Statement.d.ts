export default Statement;
declare class Statement extends React.Component<any, any, any> {
    constructor(props: any);
    handleChangeStatement: (newValue: any, structure: any) => void;
    handleRemoveStatement: () => void;
    getChoiceBySubject: (subject: any) => any;
    resetPredicate: (subjectValue: any) => void;
    clearObjects: () => void;
    render(): JSX.Element;
}
declare namespace Statement {
    export namespace defaultProps {
        export function onRemoveStatement(): void;
        export function onChangeStatement(): void;
        export function onChangeObjectCallback(): void;
        export const canDelete: boolean;
        export const statements: {
            subject: string;
            verb: string;
            object: any;
        }[];
        export const isRtl: boolean;
        export const isFullWidth: boolean;
        export const statementIndex: number;
        export const labels: {
            delete: string;
        };
    }
    export namespace propTypes {
        const canDelete_1: PropTypes.Requireable<boolean>;
        export { canDelete_1 as canDelete };
        const statements_1: PropTypes.Requireable<PropTypes.InferProps<{
            refs: PropTypes.Requireable<PropTypes.InferProps<{
                subject: PropTypes.Requireable<string>;
                verb: PropTypes.Requireable<string>;
                object: PropTypes.Requireable<any>;
            }>>;
            error: PropTypes.Requireable<string>;
        }>[]>;
        export { statements_1 as statements };
        export const options: PropTypes.Validator<object>;
        export const subjectPlaceholder: PropTypes.Validator<string>;
        const isFullWidth_1: PropTypes.Requireable<boolean>;
        export { isFullWidth_1 as isFullWidth };
        const isRtl_1: PropTypes.Requireable<boolean>;
        export { isRtl_1 as isRtl };
        const onChangeStatement_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChangeStatement_1 as onChangeStatement };
        const onRemoveStatement_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onRemoveStatement_1 as onRemoveStatement };
        const statementIndex_1: PropTypes.Requireable<number>;
        export { statementIndex_1 as statementIndex };
        const labels_1: PropTypes.Requireable<PropTypes.InferProps<{
            delete: PropTypes.Requireable<string>;
        }>>;
        export { labels_1 as labels };
        const onChangeObjectCallback_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChangeObjectCallback_1 as onChangeObjectCallback };
    }
}
import React from "react";
import PropTypes from "prop-types";
