import { ICarouselByScroll, BannerCarouselByScroll } from './carousel';
export interface ICarouselBannerExito extends ICarouselByScroll {
}
export interface IRenderItemBannerExito {
    onClick?: (index: number, item?: any) => void;
    banner: BannerCarouselByScroll[];
    isMobile?: boolean;
    borderRadiusWeb: string;
    borderRadiusMobile: string;
    classNameText: string;
    colorText: string;
}
