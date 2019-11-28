import { ReactElement } from 'react';
interface SeoClass {
    altAtribute: string;
    titleAtribute: string;
    idAnalytics: string;
    classAnalytics: string;
}
export interface ChildCategoryItem {
    name: string;
    url: string;
    textColor: string;
    chipBackground: string;
}
export interface TitleComponent {
    firstText: string;
    secondText: string;
    applyBoldInFirst: string;
    colorText: string;
    colorBorder: string;
}
export interface CoverImageProps {
    positionCategory: string;
    imageIsItem: string;
    typeBackgroundImage: string;
    imageWeb: string;
    useImageOnMobile: boolean;
    colorBackground: string;
    imageIsItemMobile: string;
    positionImage: string;
    colorBackgroundMobile: string;
    imageMobile: string;
    widthImage: string;
    heightImage: string;
    seoAttribute: SeoClass;
}
interface ShelfContentItem {
    maxItems: number;
    minItemsPerPage: number;
    itemsPerPage: number;
    arrows: boolean;
    gap: string;
    scroll: string;
}
interface ShelfContent {
    xs: ShelfContentItem;
    sm: ShelfContentItem;
    md: ShelfContentItem;
    lg: ShelfContentItem;
    xl: ShelfContentItem;
}
export interface CategoryComponentProps {
    children: ReactElement[];
    showComponent: boolean;
    materialWidth: string;
    viewMoreText: string;
    viewMoreColor: string;
    showViewMore: boolean;
    marginElement: string;
    viewMoreLink: string;
    heightBannerContent: string;
    backgroundColorBrand: string;
    showBrands: boolean;
    typeEdition: string;
    widthContent: string;
    heightContent: string;
    maxWidthContent: string;
    typeBackgroundImage: string;
    showDots: boolean;
    shelfConfiguration: ShelfContent;
    childCategory: ChildCategoryItem[];
    titleConfiguration: TitleComponent;
    coverImage: CoverImageProps;
}
export {};
