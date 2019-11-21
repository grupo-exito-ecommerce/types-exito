export default PageHeader;
declare class PageHeader extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    handleClick: (e: any) => void;
    render(): JSX.Element;
}
declare namespace PageHeader {
    export namespace propTypes {
        export const title: PropTypes.Validator<PropTypes.ReactNodeLike>;
        export const subtitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const linkLabel: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const onLinkClick: PropTypes.Requireable<(...args: any[]) => any>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import React from "react";
import PropTypes from "prop-types";
