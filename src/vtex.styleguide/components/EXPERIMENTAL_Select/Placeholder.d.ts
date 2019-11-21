export default Placeholder;
declare function Placeholder({ innerProps, children }: {
    innerProps: any;
    children: any;
}): JSX.Element;
declare namespace Placeholder {
    export namespace propTypes {
        export const innerProps: PropTypes.Requireable<object>;
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
