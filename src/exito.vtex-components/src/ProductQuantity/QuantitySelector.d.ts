import { FC, MouseEvent } from 'react';
import { IconModel } from '../shared';
export declare type ButtonMouseEvent = MouseEvent<HTMLButtonElement>;
export declare type DivMouseEvent = MouseEvent<HTMLDivElement>;
interface QuantitySelectorProps {
    quantity: number;
    availableQuantity: number;
    loadingRemove?: boolean;
    loadingDelete?: boolean;
    loadingAdd?: boolean;
    iconMore: IconModel;
    iconReduce: IconModel;
    iconDelete: IconModel;
    handleRemove: (event: ButtonMouseEvent) => void;
    handleDelete: (event: DivMouseEvent) => void;
    handleAdd: (event: ButtonMouseEvent) => void;
}
export declare const QuantitySelector: FC<QuantitySelectorProps>;
export {};
