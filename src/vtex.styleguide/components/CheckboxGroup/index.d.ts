export default CheckboxGroup;
declare class CheckboxGroup extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        groupChecked: boolean;
    };
    isPartiallyChecked: () => boolean;
    isFullyChecked: () => boolean;
    handleOnChange: (key: any) => void;
    setGroupChecked: (value: any) => any;
    handleOnGroupChange: () => void;
    render(): JSX.Element;
}
declare namespace CheckboxGroup {
    export namespace defaultProps {
        export const disabled: boolean;
        export const padded: boolean;
    }
    export namespace propTypes {
        export const checkedMap: PropTypes.Requireable<{
            [x: string]: PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                checked: PropTypes.Validator<boolean>;
            }>;
        }>;
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        export const id: PropTypes.Validator<string>;
        export const label: PropTypes.Requireable<string>;
        export const name: PropTypes.Validator<string>;
        export const onGroupChange: PropTypes.Validator<(...args: any[]) => any>;
        export const value: PropTypes.Validator<string>;
        const padded_1: PropTypes.Requireable<boolean>;
        export { padded_1 as padded };
    }
}
import React from "react";
import PropTypes from "prop-types";
