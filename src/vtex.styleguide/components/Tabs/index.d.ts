export default Tabs;
declare function Tabs({ children, fullWidth, sticky }: {
    children: any;
    fullWidth: any;
    sticky: any;
}): JSX.Element;
declare namespace Tabs {
    export namespace defaultProps {
        export const fullWidth: boolean;
        export const sticky: boolean;
    }
    export namespace propTypes {
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        const fullWidth_1: PropTypes.Requireable<boolean>;
        export { fullWidth_1 as fullWidth };
        const sticky_1: PropTypes.Requireable<boolean>;
        export { sticky_1 as sticky };
    }
}
import PropTypes from "prop-types";
