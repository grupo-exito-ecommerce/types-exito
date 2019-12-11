/// <reference types="react-intl" />
/// <reference types="typings/libs" />
import React from 'react';
interface PriceProps {
    currencyOptions?: {
        style: string;
        currency: string;
        minimumFractionDigits: number;
        maximumFractionDigits: number;
    };
    price: number | null;
    showPriceRange?: any;
    priceRange?: any;
    rangeContainerClasses?: any;
    singleContainerClasses?: any;
    intl?: any;
    renderCurrency?: boolean;
}
declare const _default: React.ComponentClass<Pick<PriceProps, "currencyOptions" | "price" | "showPriceRange" | "priceRange" | "rangeContainerClasses" | "singleContainerClasses" | "renderCurrency">, any> & {
    WrappedComponent: React.ComponentType<PriceProps & ReactIntl.InjectedIntlProps>;
};
export default _default;
