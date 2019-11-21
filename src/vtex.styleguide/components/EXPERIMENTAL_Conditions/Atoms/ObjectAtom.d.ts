export default ObjectAtom;
declare class ObjectAtom extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace ObjectAtom {
    export function EmptyObjectAtom(): JSX.Element;
    export namespace defaultProps {
        export function onChangeStatement(): void;
        export function onChangeObjectCallback(): void;
    }
    export namespace propTypes {
        export const statements: PropTypes.Requireable<PropTypes.InferProps<{
            subject: PropTypes.Requireable<string>;
            verb: PropTypes.Requireable<string>;
            object: PropTypes.Requireable<any>;
            error: PropTypes.Requireable<string>;
        }>[]>;
        export const options: PropTypes.Validator<object>;
        export const isFullWidth: PropTypes.Requireable<boolean>;
        export const statementIndex: PropTypes.Requireable<number>;
        const onChangeStatement_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChangeStatement_1 as onChangeStatement };
        const onChangeObjectCallback_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChangeObjectCallback_1 as onChangeObjectCallback };
    }
}
import React from "react";
import PropTypes from "prop-types";
