/// <reference types="lodash/common/common" />
/// <reference types="lodash/common/array" />
/// <reference types="lodash/common/collection" />
/// <reference types="lodash/common/date" />
/// <reference types="lodash/common/function" />
/// <reference types="lodash/common/lang" />
/// <reference types="lodash/common/math" />
/// <reference types="lodash/common/number" />
/// <reference types="lodash/common/object" />
/// <reference types="lodash/common/seq" />
/// <reference types="lodash/common/string" />
/// <reference types="lodash/common/util" />
declare class MultiSelect extends React.Component<any, any, any> {
    constructor(props: any);
    searchInput: React.RefObject<any>;
    state: {
        active: boolean;
        filteredOptions: any[];
        focusedOption: number;
        hovering: boolean;
        loading: boolean;
        searchTerm: string;
    };
    handleFilter: ((term: any) => Promise<void>) & import("lodash").Cancelable;
    handleFocus: () => void;
    handleBlur: () => void;
    handleKeyPress: (event: any) => void;
    handleSearch: (event: any) => void;
    handleSelect: (index: any) => void;
    handleUnselect: (index: any) => void;
    filter: (term: any) => any;
    moveFocusDown: () => void;
    moveFocusUp: () => void;
    selectFocused: () => void;
    unselectLast: () => void;
    render(): JSX.Element;
}
declare namespace MultiSelect {
    export namespace defaultProps {
        export const disabled: boolean;
        export function emptyState(term: any): string;
        export const options: any[];
        export const placeholder: string;
        export const selected: any[];
    }
    export namespace propTypes {
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        const emptyState_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { emptyState_1 as emptyState };
        export const filter: PropTypes.Requireable<(...args: any[]) => any>;
        export const label: PropTypes.Requireable<string>;
        export const loadingText: PropTypes.Requireable<string>;
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        const selected_1: PropTypes.Requireable<any[]>;
        export { selected_1 as selected };
    }
}
export default MultiSelect;
import React from "react";
import PropTypes from "prop-types";
