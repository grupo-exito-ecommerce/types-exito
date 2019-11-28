export interface Name {
    showBrandName: boolean;
    showSku: boolean;
    showProductReference: boolean;
}
export interface Summary {
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
    name: Name;
}
export interface ProductList {
    maxItems: number;
    itemsPerPage: number;
    gap: string;
    scroll: string;
    arrows: boolean;
    titleText: string;
    summary: Summary;
}
export interface Shelf {
    orderBy: string;
    category?: string;
    productList: ProductList;
    collection?: string;
}
