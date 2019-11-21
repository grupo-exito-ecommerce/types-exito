export default CodeTabButton;
declare function CodeTabButton(props: any): JSX.Element;
declare namespace CodeTabButton {
    export namespace propTypes {
        export const onClick: PropTypes.Validator<(...args: any[]) => any>;
        export const name: PropTypes.Validator<string>;
        export const active: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
