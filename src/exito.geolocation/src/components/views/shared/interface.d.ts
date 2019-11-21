export interface HeaderInterface {
    title: string;
    showBack?: boolean;
    showClose?: boolean;
    handleCloseFlow: (data?: any) => void;
    backInHistory: (data?: any) => void;
    forceShowBack?: boolean;
    forceClose?: () => void;
}
export interface BodyInterface {
    children?: any;
}
export interface SectionInterface {
    icon?: Icon;
    title?: string;
    subtitle?: string;
}
export interface OrderOptionsContainerInterface {
    icon: Icon;
    title: string;
    tagButton: string;
    subtitle: string;
    handleClick: (position?: number) => void;
    type: number;
    request: boolean;
    testingClass: string;
}
export interface LayoutInterface {
    header: HeaderInterface;
    section: SectionInterface;
}
export interface ConfigViewInterface {
    layout: LayoutInterface;
    view?: any;
}
interface Icon {
    icon: string;
    viewbox: string;
    color?: string;
}
export {};
