/// <reference types="react" />
import { IconModel } from '../shared/models/IconModel';
/**
 * Icon Component
 */
declare const Icon: {
    (props: IconModel): JSX.Element | null;
    defaultProps: {
        size: number;
        viewBox: string;
    };
};
export default Icon;
