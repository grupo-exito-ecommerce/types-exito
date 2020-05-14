import { HTMLAttributes } from 'react';
import { BaseTextFieldProps } from '@material-ui/core/TextField';
export interface SuggestionAutoComplete {
    label: string;
    value: string;
}
export interface AutoCompleteProps {
    label: string;
    value: SuggestionAutoComplete | null;
    suggestions: SuggestionAutoComplete[];
    name?: string;
    placeholder?: string;
    theme?: any;
    onChange: (value: SuggestionAutoComplete) => void;
    noOptionsMessage?: (obj: {
        inputValue: string;
    }) => string | null;
    type?: string;
}
export interface OptionType {
    label: string;
    value: string;
}
export declare type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> & HTMLAttributes<HTMLDivElement>;
