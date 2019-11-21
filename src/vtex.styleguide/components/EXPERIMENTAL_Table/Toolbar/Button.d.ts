import React, { ReactNode } from 'react';
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLDivElement>>;
export declare enum ButtonVariation {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary"
}
export declare enum ButtonSize {
    Small = "small",
    Regular = "regular",
    Large = "large"
}
export declare enum IconSize {
    Heavy = 13,
    Medium = 14,
    Light = 16
}
export declare type ButtonProps = {
    id?: string;
    label?: string;
    onClick?: Function;
    isLoading?: boolean;
    disabled?: boolean;
    size?: ButtonSize;
    icon?: any;
    title?: string;
    variation?: ButtonVariation;
    isActiveOfGroup?: boolean;
    isGrouped?: boolean;
    isFirstOfGroup?: boolean;
    children?: ReactNode;
};
export default Button;
