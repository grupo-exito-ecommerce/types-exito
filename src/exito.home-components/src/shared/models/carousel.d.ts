import { ReactElement } from 'react';
export interface TitleProps {
    showComponent: boolean;
    title: string;
    tag: string;
    padding: string;
    align: string;
    margin: string;
    titleTextClassName: string;
    iconTitle: string;
    iconTitleSize: string;
    goToLinkColor: string;
    goToLinkUrl: string;
    goToLinkText: string;
}
export interface SeoClassCarousel {
    altAtribute: string;
    titleAtribute: string;
    idAnalytics: string;
    classAnalytics: string;
}
export interface BannerCarouselByScroll {
    isMobile: boolean;
    name: string;
    image: string;
    classNameText: string;
    mobileImage: string;
    url: string;
    width: string;
    height: string;
    seoAttribute: SeoClassCarousel;
    isCircle: boolean;
    showName: boolean;
    showShadow: boolean;
}
export interface ICarouselByScroll {
    colorText: string;
    classNameText: string;
    backgroundContent: string;
    pageWidth: string;
    nextArrow?: ReactElement<any>;
    prevArrow?: ReactElement<any>;
    titleToRender: ReactElement<any>;
    bannersToRender?: ReactElement<any>;
    showSides: boolean;
    sideSizeMobile: number;
    sideSizeWeb: number;
    children?: ReactElement[];
    banner: BannerCarouselByScroll[];
    itemsPerRow: number;
    height: string;
    width: string;
    maxWidth: string;
    padding: string;
    showBorder: boolean;
    scroll: typeOfScroll;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    showComponent: boolean;
    marginElement: string;
    borderRadiusWeb: string;
    borderRadiusMobile: string;
    arrowPosition: IArrowPosition;
    showDotsWeb: boolean;
    showDotsMobile: boolean;
    marginDots: string;
    scrollOnDevice: boolean;
    showArrowsWeb: boolean;
    showArrowsMobile: boolean;
    showDots: boolean;
    showArrows: boolean;
    scrollOnWeb: boolean;
}
export interface IArrowPosition {
    left: string;
    right: string;
    top: string;
}
export interface IArrowCarousel {
    useCarouselInformation: UseCarousel;
    nextArrow?: ReactElement<any>;
    prevArrow?: ReactElement<any>;
    arrowPosition: IArrowPosition;
}
export interface UseCarousel {
    currentPageResolution: string;
    currentPosition: number;
    widthElement: number;
    widthOfTheContent: number;
    rightScroll: () => void;
    leftScroll: () => void;
    goToPosition(position: number): void;
    getLeftToScroll(typeScrollToUse: typeOfScroll, positionToUse?: number | undefined): number;
    getRightToScroll(typeScrollToUse: typeOfScroll, positionToUse?: number | undefined): number;
    showLeftArrow: boolean;
    showRightArrow: boolean;
    typeScroll: typeOfScroll;
    itemRemaining: number;
    itemsToShow: number;
    isMobile: boolean;
    widthContainer: number;
    numberOfElements: number;
    itemStyles: ItemStyleProps;
}
export declare type typeOfScroll = 'BY_PAGE' | 'ONE_BY_ONE';
export interface UseCarouselProps {
    scroll: typeOfScroll;
    scrollOnWeb: boolean;
    scrollOnDevice: boolean;
    parentRef: React.RefObject<HTMLDivElement>;
    ref: React.RefObject<HTMLDivElement>;
    numberOfElements: number;
    itemsPerRow: number;
    pageWidth: string;
    showSides: boolean;
    sideSize: number;
}
export interface ItemStyleProps {
    flexBasis: string;
    maxWidth: string;
}
export interface ICarouselByScrollView extends ICarouselByScroll {
    itemsPerRow: number;
    contentRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    useCarouselInformation: UseCarousel;
    pageWidth: string;
}
export interface IRenderItems {
    banner: BannerCarouselByScroll[];
    itemStyles: ItemStyleProps;
}
export interface IDotsProps {
    numberOfElements: number;
    goToPosition(position: number): void;
    typeScroll: typeOfScroll;
    itemsPerRow: number;
    itemsToShow: number;
    marginDots: string;
}
export interface IRemaining {
    reamingNumber: number;
    typeScrollToUse: typeOfScroll;
}
