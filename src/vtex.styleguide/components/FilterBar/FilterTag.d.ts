export default FilterTag;
declare class FilterTag extends React.PureComponent<any, any, any> {
    constructor(props: any);
    filterMenuContainer: React.RefObject<any>;
    state: {
        isMenuOpen: boolean;
        virtualStatement: any;
    };
    openMenu: () => void;
    closeMenu: () => void;
    handleClickOutside: (e: any) => void;
    componentWillUnmount(): void;
    handleChangeStatement: (statement: any) => void;
    resetVirtualStatement: () => void;
    render(): JSX.Element;
}
declare namespace FilterTag {
    export namespace defaultProps {
        export const alwaysVisible: boolean;
        export const isMoreOptions: boolean;
        export const subjectPlaceholder: string;
        export const newFilterLabel: string;
    }
    export namespace propTypes {
        export const options: PropTypes.Validator<object>;
        export const subject: PropTypes.Requireable<string>;
        export const statements: PropTypes.Requireable<any[]>;
        const alwaysVisible_1: PropTypes.Requireable<boolean>;
        export { alwaysVisible_1 as alwaysVisible };
        export const getFilterLabel: PropTypes.Requireable<(...args: any[]) => any>;
        const subjectPlaceholder_1: PropTypes.Requireable<string>;
        export { subjectPlaceholder_1 as subjectPlaceholder };
        export const onClickClear: PropTypes.Requireable<(...args: any[]) => any>;
        const isMoreOptions_1: PropTypes.Requireable<boolean>;
        export { isMoreOptions_1 as isMoreOptions };
        export const onSubmitFilterStatement: PropTypes.Validator<(...args: any[]) => any>;
        export const submitFilterLabel: PropTypes.Validator<string>;
        const newFilterLabel_1: PropTypes.Requireable<string>;
        export { newFilterLabel_1 as newFilterLabel };
    }
}
import React from "react";
import PropTypes from "prop-types";
