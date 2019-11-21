export default Menu;
declare class Menu extends React.Component<any, any, any> {
    constructor(props: any);
    containerElement: React.RefObject<any>;
    menuElement: React.RefObject<any>;
    state: {
        hasCalculatedSize: boolean;
        isUpwards: boolean;
        isVisible: boolean;
        menuHeight: number;
        containerHeight: number;
    };
    getMenuBounds: () => any;
    getContainerBounds: () => any;
    updateMenu(): void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
declare namespace Menu {
    export namespace defaultProps {
        export const options: any[];
        export const align: string;
        export const open: boolean;
    }
    export namespace propTypes {
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const open_1: PropTypes.Requireable<boolean>;
        export { open_1 as open };
        const options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        export const button: PropTypes.Requireable<PropTypes.ReactElementLike>;
        export const width: PropTypes.Requireable<React.ReactText>;
        export const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const align_1: PropTypes.Requireable<string>;
        export { align_1 as align };
    }
}
import React from "react";
import PropTypes from "prop-types";
