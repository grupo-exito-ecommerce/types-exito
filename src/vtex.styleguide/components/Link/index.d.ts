export default Link;
declare function Link({ children, href, target, mediumWeigth }: {
    children: any;
    href: any;
    target: any;
    mediumWeigth: any;
}): JSX.Element;
declare namespace Link {
    export namespace defaultProps {
        export const target: string;
        export const mediumWeigth: boolean;
    }
    export namespace propTypes {
        export const children: PropTypes.Validator<string>;
        export const href: PropTypes.Validator<string>;
        const target_1: PropTypes.Requireable<string>;
        export { target_1 as target };
        const mediumWeigth_1: PropTypes.Requireable<boolean>;
        export { mediumWeigth_1 as mediumWeigth };
    }
}
import PropTypes from "prop-types";
