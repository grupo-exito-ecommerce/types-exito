export default Toggle;
declare class Toggle extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
declare namespace Toggle {
    export namespace defaultProps {
        export const checked: boolean;
        export const disabled: boolean;
        export const semantic: boolean;
        export const label: string;
        export const size: string;
    }
    export namespace propTypes {
        const checked_1: PropTypes.Requireable<boolean>;
        export { checked_1 as checked };
        const semantic_1: PropTypes.Requireable<boolean>;
        export { semantic_1 as semantic };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        export const id: PropTypes.Requireable<string>;
        const label_1: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        export { label_1 as label };
        export const name: PropTypes.Requireable<string>;
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const size_1: PropTypes.Requireable<string>;
        export { size_1 as size };
        export const helpText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import React from "react";
import PropTypes from "prop-types";
