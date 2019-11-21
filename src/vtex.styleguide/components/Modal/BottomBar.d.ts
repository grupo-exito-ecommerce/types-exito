export default BottomBar;
declare function BottomBar(props: any): JSX.Element;
declare namespace BottomBar {
    export namespace propTypes {
        export const showTopShadow: PropTypes.Requireable<boolean>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const responsiveFullScreen: PropTypes.Requireable<boolean>;
        export const showBorder: PropTypes.Requireable<boolean>;
    }
    export namespace defaultProps {
        const showTopShadow_1: boolean;
        export { showTopShadow_1 as showTopShadow };
        const responsiveFullScreen_1: boolean;
        export { responsiveFullScreen_1 as responsiveFullScreen };
    }
}
import PropTypes from "prop-types";
