declare class DropdownList extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    handleSelect: (index: any) => void;
    handleFocus: (index: any) => void;
    render(): JSX.Element;
}
declare namespace DropdownList {
    export namespace defaultProps {
        export const focused: string;
        export function formatOption(opt: any): any;
        export const loading: boolean;
        export const loadingText: string;
        export const options: any[];
        export const isVisible: boolean;
    }
    export namespace propTypes {
        export const emptyState: PropTypes.Requireable<string>;
        const focused_1: PropTypes.Requireable<number>;
        export { focused_1 as focused };
        const formatOption_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { formatOption_1 as formatOption };
        const loading_1: PropTypes.Requireable<boolean>;
        export { loading_1 as loading };
        const loadingText_1: PropTypes.Requireable<string>;
        export { loadingText_1 as loadingText };
        export const onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        export const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        export const onMouseEnter: PropTypes.Requireable<(...args: any[]) => any>;
        export const onMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        const options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        const isVisible_1: PropTypes.Requireable<boolean>;
        export { isVisible_1 as isVisible };
    }
}
export default DropdownList;
import React from "react";
import PropTypes from "prop-types";
