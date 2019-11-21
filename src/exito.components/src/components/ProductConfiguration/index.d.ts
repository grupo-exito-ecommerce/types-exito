/// <reference types="react" />
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
export declare let DEFAULT_PRODUCT_DISTRIBUTION: ProductConfigurationConfig[];
/**
 * Método que recorre la lista de opciones configuradas desde el storefront,
 * toma como base la categoría en la posición 0 de cada producto y
 * pasa a validar si hay alguna configuración indicada para la grid de la galería
 * @param category
 * @param productConfig
 */
export declare const getProductConfiguration: (category: string, productConfig: ProductConfigurationConfig[]) => ProductConfigurationConfig | null;
export declare function useDistribution(): {
    distribution: ProductConfigurationConfig[];
    setDistribution: import("react").Dispatch<import("react").SetStateAction<ProductConfigurationConfig[]>>;
};
declare const ProductConfiguration: {
    (props: ProductConfigurationProps): null;
    defaultProps: {
        productConfiguration: ProductConfigurationConfig[];
    };
    getSchema(): {
        title: string;
        description: string;
        type: string;
        properties: {
            productConfiguration: {
                default: ProductConfigurationConfig[];
                title: string;
                type: string;
                items: {
                    title: string;
                    type: string;
                    properties: {
                        name: {
                            title: string;
                            type: string;
                            default: string;
                        };
                        badgeText: {
                            title: string;
                            type: string;
                        };
                        forceWidth: {
                            title: string;
                            type: string;
                        };
                        buyButtonShortText: {
                            title: string;
                            type: string;
                        };
                        buyButtonLargeText: {
                            title: string;
                            type: string;
                        };
                        buyButtonIcon: {
                            title: string;
                            type: string;
                            enum: string[];
                        };
                        displayBuyButton: {
                            title: string;
                            type: string;
                            enum: any[];
                            enumNames: any[];
                            default: string;
                        };
                        isOneClickBuy: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        showBadge: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        showCollections: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        labelSellingPrice: {
                            title: string;
                            type: string;
                            default: string;
                        };
                        showListPrice: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        showLabels: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        showInstallments: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        showSavings: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        showBrandName: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        showSku: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        showProductReference: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                        xs: {
                            title: string;
                            type: string;
                            enum: any[];
                            enumNames: any[];
                            default: number;
                        };
                        sm: {
                            title: string;
                            type: string;
                            enum: any[];
                            enumNames: any[];
                            default: number;
                        };
                        md: {
                            title: string;
                            type: string;
                            enum: any[];
                            enumNames: any[];
                            default: number;
                        };
                        lg: {
                            title: string;
                            type: string;
                            enum: any[];
                            enumNames: any[];
                            default: number;
                        };
                        xl: {
                            title: string;
                            type: string;
                            enum: any[];
                            enumNames: any[];
                            default: number;
                        };
                    };
                };
            };
        };
    };
};
export default ProductConfiguration;
