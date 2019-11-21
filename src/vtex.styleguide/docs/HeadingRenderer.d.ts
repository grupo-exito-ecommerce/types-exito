export default HeadingRenderer;
declare function HeadingRenderer({ level, children, ...props }: {
    [x: string]: any;
    level: any;
    children: any;
}): JSX.Element;
declare namespace HeadingRenderer {
    export namespace propTypes {
        export const classes: PropTypes.Requireable<object>;
        export const level: PropTypes.Validator<number>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
