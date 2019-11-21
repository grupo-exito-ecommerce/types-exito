export default Textarea;
declare class Textarea extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        active: boolean;
    };
    handleChange: (event: any) => void;
    handleFocus: (event: any) => void;
    handleBlur: (event: any) => void;
    render(): JSX.Element;
}
declare namespace Textarea {
    export function CharacterCountdown(props: any): JSX.Element;
    export namespace defaultProps {
        export const autoFocus: boolean;
        export const dataAttributes: {};
        export const disabled: boolean;
        export const label: string;
        export const readOnly: boolean;
        export const resize: string;
        export const size: string;
        export const error: boolean;
        export const characterCountdownText: string;
        export const rows: number;
    }
    export namespace propTypes {
        export const children: PropTypes.Requireable<string>;
        const size_1: PropTypes.Requireable<string>;
        export { size_1 as size };
        export const value: PropTypes.Requireable<string>;
        export const defaultValue: PropTypes.Requireable<string>;
        const error_1: PropTypes.Requireable<boolean>;
        export { error_1 as error };
        export const errorMessage: PropTypes.Requireable<string>;
        export const helpText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const label_1: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        export { label_1 as label };
        export const autoComplete: PropTypes.Requireable<string>;
        const autoFocus_1: PropTypes.Requireable<boolean>;
        export { autoFocus_1 as autoFocus };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        export const id: PropTypes.Requireable<string>;
        export const maxLength: PropTypes.Requireable<string>;
        export const minLength: PropTypes.Requireable<string>;
        export const name: PropTypes.Requireable<string>;
        export const placeholder: PropTypes.Requireable<string>;
        const readOnly_1: PropTypes.Requireable<boolean>;
        export { readOnly_1 as readOnly };
        export const required: PropTypes.Requireable<string>;
        const resize_1: PropTypes.Requireable<string>;
        export { resize_1 as resize };
        const rows_1: PropTypes.Requireable<number>;
        export { rows_1 as rows };
        export const spellCheck: PropTypes.Requireable<string>;
        export const wrap: PropTypes.Requireable<string>;
        const dataAttributes_1: PropTypes.Requireable<object>;
        export { dataAttributes_1 as dataAttributes };
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        export const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        const characterCountdownText_1: PropTypes.Requireable<string>;
        export { characterCountdownText_1 as characterCountdownText };
    }
}
import React from "react";
import PropTypes from "prop-types";
