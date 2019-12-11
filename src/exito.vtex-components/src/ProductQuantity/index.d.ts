import React from 'react';
import { BuyButtonConfig } from '../shared';
interface ProductQuantityProps {
    handleDeleteProduct: (destroy?: boolean) => void;
    productContext: any;
    seller: Seller;
    selectedQuantityPerSeller: number;
    buyButtonConfig: BuyButtonConfig;
}
declare const _default: React.ComponentClass<ProductQuantityProps, any>;
export default _default;
