export default ModalDialog;
declare class ModalDialog extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    handleCloseTransitionFinish: () => void;
    handleConfirmation: () => void;
    handleCancelation: () => void;
    render(): JSX.Element;
}
declare namespace ModalDialog {
    export namespace propTypes {
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const confirmation: PropTypes.Validator<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            onClick: PropTypes.Validator<(...args: any[]) => any>;
            isDangerous: PropTypes.Requireable<boolean>;
        }>>;
        export const cancelation: PropTypes.Validator<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            onClick: PropTypes.Validator<(...args: any[]) => any>;
        }>>;
        export const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        export const loading: PropTypes.Requireable<boolean>;
        export const onCloseTransitionFinish: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
