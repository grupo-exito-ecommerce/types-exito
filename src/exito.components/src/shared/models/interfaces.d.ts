import ApolloClient from 'apollo-client';
import { ReactNode } from 'react';
import { LogisticsInfo } from './logisticData';
import { FullSellers, UseProduct, UseSellers, Teaser } from './product';
export interface IClusters {
    id: string;
    name: string;
}
export interface ComponentsClasses {
    alliesDiscount: string;
    sellingPrice: string;
    listPrice: string;
    otherSellingPrices: {
        className: string;
        text: string;
    };
    productPum: string;
}
export interface BestTeaser {
    bestDiscount: number | null;
    teaser: Teaser | null;
}
export interface PriceComponentProps {
    product?: UseProduct | undefined;
    listPrice?: number;
    sellingPrice?: number;
    installments: number;
    showListPrice: boolean;
    showLabels: boolean;
    showInstallments: boolean;
    showSavings: boolean;
    typePrice: 'marketplace' | 'productDetail' | 'searchResult' | 'shelf';
}
export interface ProductPricesProps {
    client: ApolloClient<any>;
    productContext: UseProduct;
    getListPrice: () => number | null;
    getSellingPrice: () => number | null;
    getBadgeDiscount: () => number | null;
    getBaseDiscount: () => number | null;
    getAlliesDiscount: () => number | null;
    getAlliesDiscountPrice: () => number | null;
    sellers: UseSellers;
    clases?: string;
    getBenefits: () => Promise<AdditionalAlliesInfo[]>;
    getBestTeaser: () => BestTeaser | null;
    parsePrice: (price: number) => number | null;
    currencyOptions: CurrencyOptions;
    bestMyDiscount?: number;
}
export interface CurrencyOptions {
    style: string;
    currency: string;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
}
export interface AdditionalAlliesInfo {
    fields: any[];
    id: string;
}
export interface AdditionalAlliesInfoFormatted {
    alliedName: string;
    description: string;
    id: string;
    logo: string;
    name: string;
}
export interface AdditionalFlagsInfoFormatted {
    id: string;
    name: string;
    flagText: string;
    backgroundColor: string;
    textColor: string;
    logo: string;
    position: string;
    borderColor: string;
}
/**
 * UseProduct
 */
export interface NormalizeProduct {
    product: IProductVtex;
    sortSellers: FullSellers[];
    selectedItem: ISelectedItemVtex;
}
export interface UseSellerData {
    product: IProductVtex;
    selectedItem: ISelectedItemVtex;
}
/** Allies */
export interface customDataAllies {
    fields: any;
}
export interface customBenefitsAllies {
    name: any;
}
export interface Ally {
    logo: string;
    name: string;
    description: string;
    alliedName: string;
}
export interface AlliesProps {
    data: customDataAllies[];
    productBenefits: customBenefitsAllies;
}
export interface DeliveryId {
    courierId: string;
    courierName: string;
    dockId: string;
    quantity: number;
    warehouseId: string;
}
export interface Sla {
    deliveryIds: DeliveryId[];
    id: string;
    name: string;
    price: number;
    shippingEstimate: string;
    shippingEstimateDate?: any;
}
export interface LogisticsInfoRoot {
    logisticsInfo: LogisticsInfo[];
}
/**
 * Autocomplete
 */
export interface SuggestionAutoComplete {
    label: string;
    value: string;
}
/**
 * CollapsableBar
 */
export interface CollapsableBarProps {
    titleId: string;
    iconMinusName: string;
    iconPlusName: string;
    useShadowRoot: boolean;
    onChangeShowMinus?: (show: boolean) => void;
    showMinus: boolean;
    children: ReactNode;
}
/**
 * CustomTags
 */
export interface CustomTagScriptsProps {
    name: string;
    scripts: string;
    applyConfig: boolean;
    runOnlyOnce: boolean;
    triggerConfig: {
        trigger: string;
        customTrigger?: string;
    };
}
export interface CustomTagEventProps {
    loadScripts: boolean;
    customTags: CustomTagScriptsProps[];
}
/**
 * CustomTagsMiddleware
 */
export interface CustomTagsMiddlewareProps {
    type: string;
    data?: object;
}
/**
 * ProductConfiguration
 */
export interface ProductConfigurationConfig {
    __editorItemTitle?: string;
    buyButtonShortText: string;
    buyButtonIcon: string;
    name: string;
    buyButtonLargeText: string;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    displayBuyButton: string;
    badgeText: string;
    forceWidth: boolean;
    isOneClickBuy: boolean;
    showBadge: boolean;
    showCollections: boolean;
    labelSellingPrice: string;
    showListPrice: boolean;
    showLabels: boolean;
    showInstallments: boolean;
    showSavings: boolean;
    showBrandName: boolean;
    showSku: boolean;
    showProductReference: boolean;
}
export interface ProductConfigurationProps {
    productConfiguration: ProductConfigurationConfig[];
}
export interface SendEventProps {
    [key: string]: any;
    name: string;
    data?: any;
}
export declare type CustomFilter = (value: any, index?: number) => boolean;
/**
 * Services Bar
 */
export interface ServicesLinkItemLink {
    url: string;
    title: string;
}
export interface ServicesBarProps {
    width: string;
    services: ServicesLinkItemLink[];
}
