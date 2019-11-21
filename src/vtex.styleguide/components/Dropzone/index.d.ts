export default Dropzone;
declare class Dropzone extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        files: any[];
        isHovering: boolean;
        fileDropped: boolean;
    };
    handleDragEnter: () => void;
    handleDragLeave: () => void;
    handleDropAccepted: (files: any) => void;
    handleDropRejected: (files: any) => void;
    handleRemoveFile: (fileIndex: any) => void;
    handleReset: () => void;
    render(): JSX.Element;
}
declare namespace Dropzone {
    export namespace defaultProps {
        export function onDropRejected(): void;
        export const children: any;
        export const icon: any;
        export const isLoading: boolean;
        export function onFileReset(): void;
        export const multiple: boolean;
    }
    export namespace propTypes {
        export const onDropAccepted: PropTypes.Validator<(...args: any[]) => any>;
        const onDropRejected_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onDropRejected_1 as onDropRejected };
        const onFileReset_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onFileReset_1 as onFileReset };
        const children_1: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export { children_1 as children };
        const isLoading_1: PropTypes.Requireable<boolean>;
        export { isLoading_1 as isLoading };
        const icon_1: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export { icon_1 as icon };
        const multiple_1: PropTypes.Requireable<boolean>;
        export { multiple_1 as multiple };
    }
}
import React from "react";
import PropTypes from "prop-types";
