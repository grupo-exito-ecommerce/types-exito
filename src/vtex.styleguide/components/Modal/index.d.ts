export default Modal;
declare class Modal extends React.PureComponent<any, any, any> {
    constructor(props: any);
    contentContainerReference: React.RefObject<any>;
    state: {
        shadowBottom: boolean;
        shadowTop: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    handleScroll: (event: any) => void;
    setShadowState: (element: any) => void;
    render: () => JSX.Element;
}
declare namespace Modal {
    export namespace defaultProps {
        export const isOpen: boolean;
        export const closeOnEsc: boolean;
        export const closeOnOverlayClick: boolean;
        export const showCloseIcon: boolean;
        export const showTopBar: boolean;
        export const showBottomBarBorder: boolean;
    }
    export namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
        export const centered: PropTypes.Requireable<boolean>;
        export const container: PropTypes.Requireable<object>;
        const isOpen_1: PropTypes.Validator<boolean>;
        export { isOpen_1 as isOpen };
        export const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const showBottomBarBorder_1: PropTypes.Requireable<boolean>;
        export { showBottomBarBorder_1 as showBottomBarBorder };
        const closeOnEsc_1: PropTypes.Requireable<boolean>;
        export { closeOnEsc_1 as closeOnEsc };
        const closeOnOverlayClick_1: PropTypes.Requireable<boolean>;
        export { closeOnOverlayClick_1 as closeOnOverlayClick };
        const showCloseIcon_1: PropTypes.Requireable<boolean>;
        export { showCloseIcon_1 as showCloseIcon };
        export const bottomBar: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const responsiveFullScreen: PropTypes.Requireable<boolean>;
        const showTopBar_1: PropTypes.Requireable<boolean>;
        export { showTopBar_1 as showTopBar };
        export const onCloseTransitionFinish: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
