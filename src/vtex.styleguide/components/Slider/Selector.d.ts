declare function Selector({ onDragStart, position, active, disabled, value, displayPopup, formatValue, offset, icon, }: {
    onDragStart: any;
    position: any;
    active: any;
    disabled: any;
    value: any;
    displayPopup: any;
    formatValue: any;
    offset: any;
    icon: any;
}): JSX.Element;
declare namespace Selector {
    export namespace defaultProps {
        export const active: boolean;
        export const disabled: boolean;
        export const value: number;
        export const className: string;
        export const displayPopup: boolean;
        export const icon: any;
    }
    export namespace propTypes {
        export const position: PropTypes.Validator<string>;
        export const onDragStart: PropTypes.Validator<(...args: any[]) => any>;
        const active_1: PropTypes.Requireable<boolean>;
        export { active_1 as active };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        const value_1: PropTypes.Requireable<number>;
        export { value_1 as value };
        const displayPopup_1: PropTypes.Requireable<boolean>;
        export { displayPopup_1 as displayPopup };
        export const formatValue: PropTypes.Validator<(...args: any[]) => any>;
        export const offset: PropTypes.Validator<number>;
        const icon_1: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export { icon_1 as icon };
    }
}
export default Selector;
import PropTypes from "prop-types";
