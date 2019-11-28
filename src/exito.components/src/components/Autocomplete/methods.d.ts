/// <reference types="react" />
import { Theme } from '@material-ui/core';
import { NoticeProps } from 'react-select/src/components/Menu';
import { InputComponentProps, OptionType } from './model';
import { ValueContainerProps } from 'react-select/src/components/containers';
export declare const customThemeExito: Theme;
export declare const customThemeCarulla: Theme;
export declare const useStyles: (props?: any) => Record<"input" | "placeholder" | "root" | "paper" | "valueContainer" | "noOptionsMessage" | "singleValue", string>;
export declare const generateClassName: import("jss").GenerateId;
declare function NoOptionsMessage(props: NoticeProps<OptionType>): JSX.Element;
declare namespace NoOptionsMessage {
    var propTypes: any;
}
export default NoOptionsMessage;
declare function inputComponent({ inputRef, ...props }: InputComponentProps): JSX.Element;
declare namespace inputComponent {
    var propTypes: any;
}
export default inputComponent;
declare function ValueContainer(props: ValueContainerProps<OptionType>): JSX.Element;
declare namespace ValueContainer {
    var propTypes: any;
}
export default ValueContainer;
