export default UsageTabButton;
declare function UsageTabButton(): any;
declare namespace UsageTabButton {
    export namespace propTypes {
        export const onClick: PropTypes.Validator<(...args: any[]) => any>;
        export const name: PropTypes.Validator<string>;
        export const props: PropTypes.Validator<PropTypes.InferProps<{
            props: PropTypes.Requireable<any[]>;
            methods: PropTypes.Requireable<any[]>;
        }>>;
        export const active: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
