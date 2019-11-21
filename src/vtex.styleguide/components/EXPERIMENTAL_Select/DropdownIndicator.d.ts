export default DropdownIndicator;
declare function DropdownIndicator({ innerProps, selectProps, size }: {
    innerProps: any;
    selectProps: any;
    size: any;
}): JSX.Element;
declare namespace DropdownIndicator {
    export namespace propTypes {
        export const getStyles: PropTypes.Requireable<(...args: any[]) => any>;
        export const innerProps: PropTypes.Requireable<object>;
        export const size: PropTypes.Requireable<string>;
        export const selectProps: PropTypes.Validator<object>;
    }
}
import PropTypes from "prop-types";
