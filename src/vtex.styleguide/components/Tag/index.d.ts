export default Tag;
declare class Tag extends React.PureComponent<any, any, any> {
    state: {
        hover: boolean;
    };
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): JSX.Element;
}
declare namespace Tag {
    export namespace defaultProps {
        export const disabled: boolean;
        export const size: string;
    }
    export const propTypes: {
        bgColor: PropTypes.Requireable<string>;
        children: PropTypes.Validator<PropTypes.ReactNodeLike>;
        color: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        /** Input size */
        size: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        variation: PropTypes.Requireable<string>;
    };
}
import React from "react";
import PropTypes from "prop-types";
