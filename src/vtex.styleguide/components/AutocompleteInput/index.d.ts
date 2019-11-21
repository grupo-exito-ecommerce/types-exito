import PropTypes from 'prop-types';
import React from 'react';
declare const propTypes: {
    /** Input props. All HTMLInput props can be added too */
    input: PropTypes.Validator<PropTypes.InferProps<{
        /** Clear input handler */
        onClear: PropTypes.Validator<(...args: any[]) => any>;
        /** Search by term handler (fired on enter or when clicking the search button) */
        onSearch: PropTypes.Validator<(...args: any[]) => any>;
        /** Change term handler */
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        /** Term to be searched */
        value: PropTypes.Requireable<string>;
        /** Determine if the input and button should be disabled */
        disabled: PropTypes.Requireable<boolean>;
    }>>;
    /** Options props. More details in the examples */
    options: PropTypes.Validator<PropTypes.InferProps<{
        /**
         * Determine if a spinner will be shown below the given options
         * to show that more options will be added
         */
        loading: PropTypes.Requireable<boolean>;
        /**
         * Function that makes possible to the dev to customly render option.
         * Called with all props needed: `(props: { key: string, selected: boolean, value: OptionValue, searchTerm: string, roundedBottom: boolean, icon: ReactElement, onClick: () => void }, index: number)` and should return a React Node
         */
        renderOption: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * List of options.
         * An option could be a string (denoting a search by term) or an object
         * with `{value: any, label: string}` (denoting the search is related to an entity).
         */
        value: PropTypes.Validator<(string | PropTypes.InferProps<{
            value: PropTypes.Requireable<any>;
            label: PropTypes.Validator<string>;
        }>)[]>;
        /**
         * Icon representing the entity.
         * Shown when a value is an object to show the difference
         */
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        /**
         * Callback called when an option is selected
         * (clicked or via arrow keys + enter)
         */
        onSelect: PropTypes.Validator<(...args: any[]) => any>;
        /**
         * Last searched terms. Can be used to enhance the Autocomplete experience.
         * Defined with: `{
         *   value: OptionValue[],
         *   onChange: (term: string | OptionValue) => any,
         *   label: string
         * }`
         */
        lastSearched: PropTypes.Requireable<PropTypes.InferProps<{
            /** List of last searched options */
            value: PropTypes.Validator<(string | PropTypes.InferProps<{
                value: PropTypes.Requireable<any>;
                label: PropTypes.Validator<string>;
            }>)[]>;
            /**
             * Last searched change handler.
             * Called when a term is searched or an option is selected.
             */
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            /** Last Searched options's title */
            label: PropTypes.Validator<PropTypes.ReactNodeLike>;
        }>>;
    }>>;
};
declare const AutocompleteInput: React.FunctionComponent<PropTypes.InferProps<typeof propTypes>>;
export default AutocompleteInput;
