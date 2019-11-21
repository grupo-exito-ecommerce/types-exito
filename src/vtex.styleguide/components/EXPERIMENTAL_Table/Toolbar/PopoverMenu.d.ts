import React, { FC } from 'react';
export default function usePopoverMenu(): {
    boxVisible: boolean;
    setBoxVisible: React.Dispatch<React.SetStateAction<boolean>>;
    buttonRef: React.MutableRefObject<any>;
    toggleBox: () => void;
};
export declare const Box: FC<BoxProps>;
export declare const Item: FC<ItemProps>;
declare type BoxProps = {
    height?: string | number;
    width?: string | number;
    alignMenu?: Alignment;
    noMargin?: boolean;
    borderClasses?: string;
    groupActions?: Array<MenuAction>;
};
declare type ItemProps = {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    isSelected?: boolean;
};
export declare type MenuAction = {
    label: string;
    onClick: Function;
    toggle?: {
        checked: boolean;
        semantic: boolean;
    };
    id?: number | string;
};
export declare enum Alignment {
    Left = "left",
    Right = "right"
}
export {};
