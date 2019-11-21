export function PathlineRenderer({ classes, children }: {
    classes: any;
    children: any;
}): JSX.Element;
export namespace PathlineRenderer {
    export namespace propTypes {
        export const classes: PropTypes.Validator<object>;
        export const children: PropTypes.Requireable<object>;
    }
}
export function styles({ space, fontFamily, fontSize, color }: {
    space: any;
    fontFamily: any;
    fontSize: any;
    color: any;
}): {
    pathline: {
        fontFamily: any;
        fontSize: any;
        color: any;
        wordBreak: string;
    };
    copyButton: {
        marginLeft: any;
    };
};
declare var _default: any;
export default _default;
import PropTypes from "prop-types";
