/// <reference types="react" />
import { Theme } from '@material-ui/core';
import { NoticeProps } from 'react-select/src/components/Menu';
import { InputComponentProps, OptionType } from './model';
import { ValueContainerProps } from 'react-select/src/components/containers';
export declare const customThemeExito: Theme;
export declare const customThemeCarulla: Theme;
export declare const useStyles: (props?: any) => Record<"input" | "placeholder" | "root" | "paper" | "valueContainer" | "noOptionsMessage" | "singleValue", string>;
export declare const generateClassName: import("jss").GenerateId;
export declare function NoOptionsMessage(props: NoticeProps<OptionType>): JSX.Element;
export declare namespace NoOptionsMessage {
    var propTypes: any;
}
export declare function inputComponent({ inputRef, ...props }: InputComponentProps): JSX.Element;
export declare namespace inputComponent {
    var propTypes: any;
}
export declare function ValueContainer(props: ValueContainerProps<OptionType>): JSX.Element;
export declare namespace ValueContainer {
    var propTypes: any;
}
