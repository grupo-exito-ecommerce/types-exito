import { ReactElement } from 'react';
import { SeoClassCarousel } from '../shared';
interface ImageProps {
    padding: string;
    image: string;
}
interface ICarouselWithImage {
    width: string;
    margin: string;
    showComponent: boolean;
    maxWidth: string;
    rightPosition: boolean;
    children?: ReactElement[];
    carouselWidth: string;
    bannerWidth: string;
    image: {
        url: string;
        seoAttribute: SeoClassCarousel;
        web: ImageProps;
        mobile: ImageProps;
    };
    showBannerOnWeb: boolean;
    showBannerOnMobile: boolean;
}
declare const CarouselWithImage: {
    (props: ICarouselWithImage): JSX.Element | null;
    getSchema(): {
        title: string;
        type: string;
        default: ICarouselWithImage;
        properties: {
            showComponent: {
                default: boolean;
                title: string;
                type: string;
            };
            width: {
                title: string;
                type: string;
            };
            margin: {
                title: string;
                type: string;
            };
            maxWidth: {
                title: string;
                type: string;
            };
            carouselWidth: {
                title: string;
                type: string;
            };
            bannerWidth: {
                title: string;
                type: string;
            };
            showBannerOnWeb: {
                title: string;
                type: string;
            };
            rightPosition: {
                title: string;
                type: string;
            };
            showBannerOnMobile: {
                title: string;
                type: string;
            };
            image: {
                type: string;
                properties: {
                    mobile: {
                        type: string;
                        properties: {
                            padding: {
                                title: string;
                                type: string;
                            };
                            image: {
                                title: string;
                                type: string;
                                widget: {
                                    'ui:widget': string;
                                };
                            };
                        };
                    };
                    web: {
                        type: string;
                        properties: {
                            padding: {
                                title: string;
                                type: string;
                            };
                            image: {
                                title: string;
                                type: string;
                                widget: {
                                    'ui:widget': string;
                                };
                            };
                        };
                    };
                    url: {
                        default: string;
                        title: string;
                        type: string;
                    };
                    seoAttribute: {
                        title: string;
                        type: string;
                        properties: {
                            altAtribute: {
                                title: string;
                                type: string;
                            };
                            titleAtribute: {
                                title: string;
                                type: string;
                            };
                            idAnalytics: {
                                title: string;
                                type: string;
                            };
                            classAnalytics: {
                                default: string;
                                title: string;
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    defaultProps: ICarouselWithImage;
};
export default CarouselWithImage;
