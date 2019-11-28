import React from 'react';
import { State } from 'vtex.product-summary-context';
import { BuyButtonConfig } from '../shared';
import { UseProduct } from 'types-exito/src/exito.components/src/shared';
interface ProductQuantityProps {
    handleDeleteProduct: (destroy?: boolean) => void;
    productContext: State | UseProduct | null;
    seller: Seller;
    selectedQuantityPerSeller: number;
    buyButtonConfig: BuyButtonConfig;
}
declare const _default: React.ComponentClass<ProductQuantityProps, any>;
export default _default;
