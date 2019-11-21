export default Info;
declare function Info({ color, size, block }: {
    color: any;
    size: any;
    block: any;
}): JSX.Element;
declare namespace Info {
    export namespace defaultProps {
        export const color: string;
        export const size: number;
        export const block: boolean;
    }
    export namespace propTypes {
        const color_1: PropTypes.Requireable<string>;
        export { color_1 as color };
        const size_1: PropTypes.Requireable<number>;
        export { size_1 as size };
        const block_1: PropTypes.Requireable<boolean>;
        export { block_1 as block };
    }
}
import PropTypes from "prop-types";
