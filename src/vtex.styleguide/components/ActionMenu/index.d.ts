export default ActionMenu;
declare class ActionMenu extends React.Component<any, any, any> {
    constructor(props: any);
    container: React.RefObject<any>;
    menu: React.RefObject<any>;
    state: {
        isMenuOpen: boolean;
    };
    openMenu: () => void;
    closeMenu: () => void;
    handleClick: () => void;
    isClickOutsideMenu: (target: any) => boolean;
    isClickOutsideContainer: (target: any) => boolean;
    isClickOutside: (target: any) => boolean;
    handleClickOutside: (e: any) => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare namespace ActionMenu {
    export namespace defaultProps {
        export const options: any[];
        export const align: string;
        export const hideCaretIcon: boolean;
        export const menuWidth: number;
        export const shouldCloseOnClick: boolean;
        export const isGrouped: boolean;
        export const isFirstOfGroup: boolean;
        export const isLastOfGroup: boolean;
        export const isActiveOfGroup: boolean;
    }
    export namespace propTypes {
        const align_1: PropTypes.Requireable<string>;
        export { align_1 as align };
        const shouldCloseOnClick_1: PropTypes.Requireable<boolean>;
        export { shouldCloseOnClick_1 as shouldCloseOnClick };
        export const buttonProps: PropTypes.Requireable<object>;
        export const icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        export const label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const hideCaretIcon_1: PropTypes.Requireable<boolean>;
        export { hideCaretIcon_1 as hideCaretIcon };
        const menuWidth_1: PropTypes.Requireable<React.ReactText>;
        export { menuWidth_1 as menuWidth };
        const options_1: PropTypes.Validator<PropTypes.InferProps<{
            label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
            /** whether option has inline toggle */
            toggle: PropTypes.Requireable<PropTypes.InferProps<{
                checked: PropTypes.Requireable<boolean>;
                semantic: PropTypes.Requireable<boolean>;
            }>>;
        }>[]>;
        export { options_1 as options };
        const isGrouped_1: PropTypes.Requireable<boolean>;
        export { isGrouped_1 as isGrouped };
        const isFirstOfGroup_1: PropTypes.Requireable<boolean>;
        export { isFirstOfGroup_1 as isFirstOfGroup };
        const isLastOfGroup_1: PropTypes.Requireable<boolean>;
        export { isLastOfGroup_1 as isLastOfGroup };
        const isActiveOfGroup_1: PropTypes.Requireable<boolean>;
        export { isActiveOfGroup_1 as isActiveOfGroup };
    }
}
import React from "react";
import PropTypes from "prop-types";
