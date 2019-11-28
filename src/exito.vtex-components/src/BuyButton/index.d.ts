import { FC, ReactElement } from 'react';
import { State } from 'vtex.product-summary-context';
import { ButtonType, StylesConfig } from '../shared';
interface BuyButtonProps {
    buttonType: ButtonType;
    children: ReactElement;
    productContext: State;
    container: StylesConfig;
}
export declare const BuyButtonToProductDetail: FC<{
    container: StylesConfig;
}>;
declare const BuyButton: FC<BuyButtonProps>;
export default BuyButton;
