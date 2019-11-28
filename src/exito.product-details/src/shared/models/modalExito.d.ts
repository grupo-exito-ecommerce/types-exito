import { ReactNode } from 'react';
import { FullSellers } from 'types-exito/src/exito.components/src/shared';
export interface IModalExito {
    children?: ReactNode;
    title?: string;
    open: boolean;
    color?: string;
    onClose?: (e: any) => void;
}
export interface IModalPolicy {
    title?: string;
    open: boolean;
    onClose: (seller: FullSellers) => void;
    policy: string | null;
    name: string;
    color?: string;
}
export interface IModalShippingCosts extends IModalExito {
    selectedItem: ISelectedItemVtex;
    seller: FullSellers;
}
