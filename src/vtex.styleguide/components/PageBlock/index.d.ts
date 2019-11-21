export default PageBlock;
declare class PageBlock extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace PageBlock {
    export namespace defaultProps {
        export const variation: string;
    }
    export namespace propTypes {
        const variation_1: PropTypes.Requireable<string>;
        export { variation_1 as variation };
        export const title: PropTypes.Requireable<string>;
        export const testId: PropTypes.Requireable<string>;
        export const subtitle: PropTypes.Requireable<string>;
        export const titleAside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export function children(props: any, propName: any, componentName: any): Error;
    }
}
import React from "react";
import PropTypes from "prop-types";
