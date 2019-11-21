declare class ToastManager extends React.Component<any, any, any> {
    constructor(props: any);
    container: React.RefObject<any>;
    state: {
        currentToast: any;
        nextToast: any;
        isToastVisible: boolean;
    };
    showToast: (args: any) => void;
    hideToast: () => void;
    handleToastClose: () => void;
    getParentBounds: () => any;
    updateContainerBounds: () => void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
declare namespace ToastManager {
    export namespace propTypes {
        export const positioning: PropTypes.Requireable<string>;
        export const children: PropTypes.Validator<(...args: any[]) => any>;
    }
}
export default ToastManager;
import React from "react";
import PropTypes from "prop-types";
