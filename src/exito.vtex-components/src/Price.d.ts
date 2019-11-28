/// <reference path="../../typings/libs/react-intl.d.ts" />
/// <reference types="react-intl" />
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
}
declare const _default: React.ComponentClass<Pick<PriceProps, "currencyOptions" | "price" | "showPriceRange" | "priceRange" | "rangeContainerClasses" | "singleContainerClasses">, any> & {
    WrappedComponent: React.ComponentType<PriceProps & ReactIntl.InjectedIntlProps>;
};
export default _default;
