import { FC } from 'react';
import { CollapseToggleProps } from './CollapseToggle';
import { CheckboxProps } from '../../EXPERIMENTAL_Table/Checkbox';
declare const CellPrefix: FC<CellPrefixProps> & CellPrefixComposites;
export declare type CellPrefixComposites = {
    CollapseToggle?: FC<CollapseToggleProps>;
    Checkbox?: FC<CheckboxProps>;
};
export declare type CellPrefixProps = {
    depth?: number;
};
export default CellPrefix;
