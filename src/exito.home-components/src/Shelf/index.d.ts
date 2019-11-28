/// <reference types="react" />
import { IShelfProps } from './utils';
declare function ShelfWrapperExito(props: IShelfProps): JSX.Element | null;
declare namespace ShelfWrapperExito {
    var defaultProps: {
        showDots: boolean;
        showComponent: boolean;
        marginElement: string;
        maxWidthContent: string;
        maxHeightImage: string;
        isFullWidth: boolean;
        productList: {
            showTitle: boolean;
            titleText: string;
        };
        summary: {
            hideUnavailableItems: boolean;
            isOneClickBuy: boolean;
            showBadge: boolean;
            badgeText: string;
            buyButtonText: string;
            displayBuyButton: string;
            showCollections: boolean;
            showListPrice: boolean;
            showLabels: boolean;
            showInstallments: boolean;
            showSavings: boolean;
            name: {
                showBrandName: boolean;
                showSku: boolean;
                showProductReference: boolean;
            };
        };
    };
    var getSchema: () => {
        title: string;
        type: string;
        properties: {
            showComponent: {
                title: string;
                type: string;
                default: boolean;
            };
            isFullWidth: {
                title: string;
                type: string;
                default: boolean;
            };
            showDots: {
                title: string;
                type: string;
                default: boolean;
            };
            maxHeightImage: {
                title: string;
                type: string;
                default: string;
                enumNames: string[];
                enum: string[];
            };
            marginElement: {
                title: string;
                type: string;
                default: string;
            };
            maxWidthContent: {
                title: string;
                type: string;
                default: string;
            };
            productList: {
                title: string;
                type: string;
                properties: {
                    showTitle: {
                        title: string;
                        type: string;
                        default: boolean;
                    };
                    titleText: {
                        title: string;
                        type: string;
                        default: string;
                    };
                };
            };
        };
    };
}
export default ShelfWrapperExito;
