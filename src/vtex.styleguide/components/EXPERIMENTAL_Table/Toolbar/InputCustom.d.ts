import { FC, InputHTMLAttributes } from 'react';
export declare type InputCustomProps = InputHTMLAttributes<HTMLInputElement> & {
    input: Element;
};
declare const UNSAFE_InputCustom: FC<InputCustomProps>;
export default UNSAFE_InputCustom;
