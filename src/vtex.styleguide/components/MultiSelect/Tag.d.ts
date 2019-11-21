declare class Tag extends React.Component<any, any, any> {
    constructor(props: any);
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
    }
    export namespace propTypes {
        export const children: PropTypes.Validator<string>;
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export default Tag;
import React from "react";
import PropTypes from "prop-types";
