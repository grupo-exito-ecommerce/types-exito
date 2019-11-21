export default Collapsible;
declare class Collapsible extends React.Component<any, any, any> {
    constructor(props: any);
    childrenRef: React.RefObject<any>;
    openTimeout: any;
    closeTimeout: any;
    state: {
        height: number;
    };
    handleTransitionEnd: () => void;
    openCard: () => void;
    closeCard: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
declare namespace Collapsible {
    export namespace defaultProps {
        export const align: string;
        export const isOpen: boolean;
        export const muted: boolean;
        export const arrowAlign: string;
    }
    export namespace propTypes {
        const align_1: PropTypes.Requireable<string>;
        export { align_1 as align };
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
        export const header: PropTypes.Validator<PropTypes.ReactNodeLike>;
        const muted_1: PropTypes.Requireable<boolean>;
        export { muted_1 as muted };
        const isOpen_1: PropTypes.Requireable<boolean>;
        export { isOpen_1 as isOpen };
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        export const caretColor: PropTypes.Requireable<string>;
        const arrowAlign_1: PropTypes.Requireable<string>;
        export { arrowAlign_1 as arrowAlign };
    }
}
import React from "react";
import PropTypes from "prop-types";
