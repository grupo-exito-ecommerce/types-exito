import { FC } from 'react';
import { Alignment } from './PopoverMenu';
import useTableMeasures from '../hooks/useTableMeasures';
declare const ButtonDensity: FC<ButtonDensityProps>;
export declare type ButtonDensityProps = {
    density: ReturnType<typeof useTableMeasures>;
    label: string;
    lowOptionLabel: string;
    mediumOptionLabel: string;
    highOptionLabel: string;
    handleCallback: Function;
    alignMenu: Alignment;
    disabled: boolean;
};
export default ButtonDensity;
