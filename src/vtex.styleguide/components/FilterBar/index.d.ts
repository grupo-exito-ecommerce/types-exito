export namespace filterBarPropTypes {
    export const options: PropTypes.Validator<object>;
    export const statements: PropTypes.Requireable<any[]>;
    export const onChangeStatements: PropTypes.Validator<(...args: any[]) => any>;
    export const moreOptionsLabel: PropTypes.Requireable<string>;
    export const alwaysVisibleFilters: PropTypes.Requireable<string[]>;
    export const clearAllFiltersButtonLabel: PropTypes.Requireable<string>;
    export const subjectPlaceholder: PropTypes.Requireable<string>;
    export const submitFilterLabel: PropTypes.Requireable<string>;
    export const newFilterLabel: PropTypes.Requireable<string>;
}
declare var _default: any;
export default _default;
import PropTypes from "prop-types";
