import { ReactElement } from 'react';
import { BannerCarouselByScroll, ICarouselByScroll, IRenderItemBannerExito, Shelf, SliderComponentProps } from '../shared';
export interface IMoments extends BannerCarouselByScroll {
    category_id: string;
    collection_id?: string;
    classNameText: string;
    checked?: boolean;
}
export interface ICard {
    item: IMoments;
    onClick: (event: any) => void;
}
export interface ICarouselByMomentsProps extends ICarouselByScroll {
    banner: IMoments[];
    title: string;
    showBorder: boolean;
    shelfConfig: Shelf;
    sliderConfig: SliderComponentProps;
    showComponent: boolean;
    children: ReactElement[];
    background: string;
    backgroundHover: string;
    colorText: string;
    colorTextHover: string;
    borderColorHover: string;
    borderColor: string;
    classNameText: string;
}
export interface IByMomentsRenderItem extends IRenderItemBannerExito {
    background: string;
    backgroundHover: string;
    colorText: string;
    colorTextHover: string;
    borderColorHover: string;
    borderColor: string;
    classNameText: string;
}
export interface IRenderList {
    bannerMoments: IMoments[];
    handleClickMoment: (position: number) => Promise<void>;
}
