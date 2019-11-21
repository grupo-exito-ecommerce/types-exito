export const ToastContext: React.Context<{
    showToast: (str: any) => void;
    hideToast: () => void;
    toastState: any;
}>;
export class ToastProvider extends React.Component<any, any, any> {
    constructor(props: any);
    toastManager: React.RefObject<any>;
    render(): JSX.Element;
}
export namespace ToastProvider {
    export namespace propTypes {
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const positioning: PropTypes.Requireable<string>;
    }
    export namespace defaultProps {
        const positioning_1: string;
        export { positioning_1 as positioning };
    }
}
export class ToastConsumer extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
export namespace ToastConsumer {
    export namespace propTypes_1 {
        const children_1: PropTypes.Validator<(...args: any[]) => any>;
        export { children_1 as children };
    }
    export { propTypes_1 as propTypes };
}
export function withToast(WrappedComponent: any): (props: any) => JSX.Element;
import React from "react";
import PropTypes from "prop-types";
