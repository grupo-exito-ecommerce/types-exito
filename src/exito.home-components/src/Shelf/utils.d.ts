import { ReactNode } from 'react';
export declare const SHELF_IMAGES_NAME: string[];
export declare const SHELF_IMAGES: string[];
export declare const SHELF_CONFIGURATION: {
    maxItems: number;
    minItemsPerPage: number;
    itemsPerPage: number;
    scroll: string;
    arrows: boolean;
    gap: string;
};
export interface ProductList {
    arrows: boolean;
    itemsPerPage: number;
    gap: string;
    minItemsPerPage: number;
    maxItems: number;
    scroll: string;
    showTitle: boolean;
    titleText: string;
}
export interface ShelfContentItem {
    maxItems: number;
    minItemsPerPage: number;
    itemsPerPage: number;
    arrows: boolean;
    gap: string;
    scroll: string;
}
export interface ShelfContent {
    xs: ShelfContentItem;
    sm: ShelfContentItem;
    md: ShelfContentItem;
    lg: ShelfContentItem;
    xl: ShelfContentItem;
}
export interface IShelfProps {
    showComponent: boolean;
    hideUnavailableItems?: boolean;
    productList: ProductList;
    showDots: boolean;
    maxWidthContent: string;
    isFullWidth: boolean;
    marginElement: string;
    maxHeightImage: string;
    summary: object;
    showTitle: boolean;
    children: ReactNode;
    shelfConfiguration: ShelfContent;
    data: any;
    relatedProducts: boolean;
    collection: string;
    productQuery?: any;
    query?: any;
    category: string;
    params?: any;
    slug?: any;
}
