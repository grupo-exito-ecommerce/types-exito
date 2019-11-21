export default Control;
declare function Control({ size, ...props }: {
    [x: string]: any;
    size: any;
}): JSX.Element;
declare namespace Control {
    export namespace propTypes {
        export const errorMessage: PropTypes.Requireable<string>;
        export const size: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
