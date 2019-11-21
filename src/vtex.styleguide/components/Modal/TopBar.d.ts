export default TopBar;
declare function TopBar(props: any): JSX.Element;
declare namespace TopBar {
    export namespace propTypes {
        export const title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        export const showBottomShadow: PropTypes.Requireable<boolean>;
        export const responsiveFullScreen: PropTypes.Requireable<boolean>;
        export const showCloseIcon: PropTypes.Requireable<boolean>;
    }
    export namespace defaultProps {
        const showBottomShadow_1: boolean;
        export { showBottomShadow_1 as showBottomShadow };
        const responsiveFullScreen_1: boolean;
        export { responsiveFullScreen_1 as responsiveFullScreen };
    }
}
import PropTypes from "prop-types";
