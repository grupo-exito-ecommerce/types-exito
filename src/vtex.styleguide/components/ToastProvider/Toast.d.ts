declare class Toast extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        isOpen: boolean;
        isSingleLine: boolean;
    };
    messageElement: React.RefObject<any>;
    buttonElement: React.RefObject<any>;
    componentDidMount(): void;
    getDefaultDuration: () => number;
    startAutoClose: () => void;
    autoCloseTimeout: NodeJS.Timeout;
    stopAutoClose: () => void;
    handleMouseOver: () => void;
    handleMouseOut: () => void;
    handleCloseClick: () => void;
    open: () => void;
    close: () => void;
    handleActionClick: (e: any) => void;
    componentDidUpdate(prevProps: any): void;
    updateButtonWrap(): void;
    getElementWidth(ref: any): any;
    render(): JSX.Element;
}
declare namespace Toast {
    export namespace defaultProps {
        export const dismissable: boolean;
    }
    export namespace propTypes {
        export const onClose: PropTypes.Validator<(...args: any[]) => any>;
        export const message: PropTypes.Validator<string>;
        export const horizontalPosition: PropTypes.Requireable<string>;
        export const action: PropTypes.Requireable<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            onClick: PropTypes.Requireable<(...args: any[]) => any>;
            href: PropTypes.Requireable<string>;
            target: PropTypes.Requireable<string>;
            rel: PropTypes.Requireable<string>;
            download: PropTypes.Requireable<string>;
        }>>;
        export const visible: PropTypes.Requireable<boolean>;
        export const duration: PropTypes.Requireable<number>;
        const dismissable_1: PropTypes.Requireable<boolean>;
        export { dismissable_1 as dismissable };
    }
}
export default Toast;
import React from "react";
import PropTypes from "prop-types";
