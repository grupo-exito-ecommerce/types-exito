import { FC } from 'react';
import { ButtonType, StylesConfig } from '../shared';
interface BuyButtonProps {
    buttonType: ButtonType;
    productContext: any;
    container: StylesConfig;
    shouldAddToCart?: Boolean;
    onAddFinish: () => void;
}
export declare const BuyButtonToProductDetail: FC<{
    container: StylesConfig;
}>;
declare const BuyButton: FC<BuyButtonProps>;
export default BuyButton;
