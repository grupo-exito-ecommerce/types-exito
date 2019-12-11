import ApolloClient from 'apollo-client';
import { ElementType } from 'react';
import { FullSellers, BenefitsQuery, ProductBenefits, ProductPricesProps, ComponentsClasses, PriceComponentProps } from 'types-exito/src/exito.components/src/shared';
export interface ProductPriceValuesProps {
    classes: string;
    value: number;
}
export interface OtherSellingPricesProps extends ProductPriceValuesProps {
    otherTextStyle: string;
    otherText: string;
}
export interface ProductPumValuesProps {
    classes: string;
    sku: ISelectedItemVtex;
    sortSellers: FullSellers[];
    properties: any[];
    client: ApolloClient<any>;
}
export interface CustomPriceProps {
    name: any;
    classes: string;
    value: number;
    logo: string;
    description: any;
    action: string;
    component?: any;
    componentModal?: any;
    attachment?: any;
}
export interface AlliesDiscountProps {
    classes: string;
    benefitsInformation: Promise<BenefitsQuery[]>;
    benefits: ProductBenefits[];
    value: number | null;
}
export declare type ProductPricesComponent = {
    classesComponents: ComponentsClasses;
} & ProductPricesProps;
export interface DistributionComponents {
    component: ElementType;
    props: {
        classes: string;
        [key: string]: any;
    };
}
export declare type PriceProps = {
    client: ApolloClient<any>;
    priceProps: any;
    classesComponents: ComponentsClasses;
    showScenarios: boolean;
} & PriceComponentProps;
