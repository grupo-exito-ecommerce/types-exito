/// <reference types="react" />
import { ComponentsClasses } from 'types-exito/src/exito.components/src/shared';
import { AlliesDiscountProps, DistributionComponents, OtherSellingPricesProps, PriceProps, ProductPricesComponent, ProductPriceValuesProps, ProductPumValuesProps } from '../../shared';
export declare const PRICE_COMPONENT_TYPE: {
    ListPrice: import("react").MemoExoticComponent<(props: ProductPriceValuesProps) => JSX.Element>;
    SellingPrices: import("react").MemoExoticComponent<(props: ProductPriceValuesProps) => JSX.Element>;
    AlliedDiscount: import("react").MemoExoticComponent<(props: AlliesDiscountProps) => JSX.Element | null>;
    OtherSellingPrice: import("react").MemoExoticComponent<(props: OtherSellingPricesProps) => JSX.Element>;
    ProductPum: (props: ProductPumValuesProps) => JSX.Element;
    Case: (props: {
        value: string;
    }) => JSX.Element;
};
export declare const DEFAULT_CLASSES_COMPONENTS: ComponentsClasses;
/**
 * Return the styles to use in the components
 * @param props
 */
export declare const getComponentsClasses: (props: PriceProps) => ComponentsClasses;
/**
 * Return the price configuration
 * @param props
 * @param classesComponents
 */
export declare const listPricesConfiguration: (listPrice: number, classesComponents: ComponentsClasses) => {
    component: import("react").MemoExoticComponent<(props: ProductPriceValuesProps) => JSX.Element>;
    props: ProductPriceValuesProps;
};
/**
 * Return the price configuration
 * @param props
 * @param classesComponents
 */
export declare const sellingPricesConfiguration: (sellingPrice: number, classesComponents: ComponentsClasses) => {
    component: import("react").MemoExoticComponent<(props: ProductPriceValuesProps) => JSX.Element>;
    props: ProductPriceValuesProps;
};
/**
 * Return the price configuration
 * @param props
 * @param classesComponents
 */
export declare const alliesPricesConfiguration: (props: ProductPricesComponent, classesComponents: ComponentsClasses) => {
    component: import("react").MemoExoticComponent<(props: AlliesDiscountProps) => JSX.Element | null>;
    props: AlliesDiscountProps;
};
/**
 * Return the price configuration
 * @param props
 * @param classesComponents
 */
export declare const otherSellingPricesConfiguration: (props: ProductPricesComponent, classesComponents: ComponentsClasses) => {
    component: import("react").MemoExoticComponent<(props: OtherSellingPricesProps) => JSX.Element>;
    props: OtherSellingPricesProps;
};
/**
 * Return the price configuration
 * @param props
 * @param classesComponents
 */
export declare const productPumPricesConfiguration: (props: ProductPricesComponent, classesComponents: ComponentsClasses) => {
    component: (props: ProductPumValuesProps) => JSX.Element;
    props: ProductPumValuesProps;
};
/**
 * Return the price Case indication
 * @param props
 * @param classesComponents
 */
export declare const caseConfiguration: (value: string) => {
    component: (props: {
        value: string;
    }) => JSX.Element;
    props: {
        value: string;
        classes: string;
    };
};
export declare const renderElements: (elements: DistributionComponents[] | null) => JSX.Element[] | null;
