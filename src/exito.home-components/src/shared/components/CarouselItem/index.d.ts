import React from 'react';
import { BannerCarouselByScroll, ItemStyleProps } from '../../models';
interface ItemCarouselProps extends BannerCarouselByScroll {
    onClick?: any;
    style: ItemStyleProps;
    borderRadiusWeb: string;
    borderRadiusMobile: string;
    customStyle?: object;
    className?: string;
}
export declare const ItemCarousel: React.MemoExoticComponent<(props: ItemCarouselProps) => JSX.Element>;
export {};
