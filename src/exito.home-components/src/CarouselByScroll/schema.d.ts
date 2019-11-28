declare type carouselType = 'circle' | 'banners';
export declare const configureBannerCarousel: (typeBanner: carouselType, customItems?: object | undefined) => {
    banner: {
        items: {
            properties: {
                isCircle: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                width: {
                    default: string;
                    enum: string[];
                    title: string;
                    type: string;
                };
                height: {
                    default: string;
                    enum: string[];
                    title: string;
                    type: string;
                };
                image: {
                    default: string;
                    title: string;
                    type: string;
                    widget: {
                        'ui:widget': string;
                    };
                };
                mobileImage: {
                    default: string;
                    title: string;
                    type: string;
                    widget: {
                        'ui:widget': string;
                    };
                };
                showName: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                name: {
                    default: string;
                    title: string;
                    type: string;
                };
                borderRadiusWeb: {
                    default: string;
                    title: string;
                    type: string;
                };
                borderRadiusMobile: {
                    default: string;
                    title: string;
                    type: string;
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
                showShadow: {
                    default: boolean;
                    title: string;
                    type: string;
                };
            } | {
                isCircle: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                width: {
                    default: string;
                    enum: string[];
                    title: string;
                    type: string;
                };
                height: {
                    default: string;
                    enum: string[];
                    title: string;
                    type: string;
                };
                image: {
                    default: string;
                    title: string;
                    type: string;
                    widget: {
                        'ui:widget': string;
                    };
                };
                mobileImage: {
                    default: string;
                    title: string;
                    type: string;
                    widget: {
                        'ui:widget': string;
                    };
                };
                showName: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                name: {
                    default: string;
                    title: string;
                    type: string;
                };
                borderRadiusWeb: {
                    default: string;
                    title: string;
                    type: string;
                };
                borderRadiusMobile: {
                    default: string;
                    title: string;
                    type: string;
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
                showShadow: {
                    default: boolean;
                    title: string;
                    type: string;
                };
            };
            title: string;
            type: string;
        };
        minItems: number;
        title: string;
        type: string;
    };
};
/**
 * Contiene la distribución a emplear para el carousel
 */
export declare const configureDistributionCarousel: (xs: number, sm: number, md: number, lg: number, xl: number) => {
    xs: {
        default: number;
        enum: any;
        enumNames: any;
        title: string;
        type: string;
    };
    sm: {
        default: number;
        enum: any;
        enumNames: any;
        title: string;
        type: string;
    };
    md: {
        default: number;
        enum: any;
        enumNames: any;
        title: string;
        type: string;
    };
    lg: {
        default: number;
        enum: any;
        enumNames: any;
        title: string;
        type: string;
    };
    xl: {
        default: number;
        enum: any;
        enumNames: any;
        title: string;
        type: string;
    };
};
/**
 * Configuration for the container of the carousel
 */
export declare const configurePropertiesCarousel: {
    scrollOnDevice: {
        default: boolean;
        title: string;
        type: string;
    };
    marginElement: {
        title: string;
        type: string;
        default: string;
    };
    padding: {
        title: string;
        type: string;
        default: string;
    };
    width: {
        default: string;
        enum: string[];
        title: string;
        type: string;
    };
    maxWidth: {
        default: string;
        title: string;
        type: string;
    };
    backgroundContent: {
        default: string;
        widget: {
            'ui:widget': string;
        };
        title: string;
        type: string;
    };
    height: {
        default: string;
        title: string;
        type: string;
    };
    showSides: {
        default: boolean;
        title: string;
        type: string;
    };
    sideSizeMobile: {
        default: number;
        title: string;
        type: string;
    };
    sideSizeWeb: {
        default: number;
        title: string;
        type: string;
    };
    scroll: {
        default: string;
        title: string;
        type: string;
        enum: string[];
        enumNames: string[];
    };
    showBorder: {
        default: boolean;
        title: string;
        type: string;
    };
    marginDots: {
        title: string;
        type: string;
        default: string;
    };
    showDots: {
        default: boolean;
        title: string;
        type: string;
    };
    showDotsWeb: {
        default: boolean;
        title: string;
        type: string;
    };
    showDotsMobile: {
        default: boolean;
        title: string;
        type: string;
    };
    showArrows: {
        default: boolean;
        title: string;
        type: string;
    };
    showArrowsWeb: {
        default: boolean;
        title: string;
        type: string;
    };
    showArrowsMobile: {
        default: boolean;
        title: string;
        type: string;
    };
    arrowPosition: {
        properties: {
            left: {
                title: string;
                type: string;
                default: string;
            };
            right: {
                title: string;
                type: string;
                default: string;
            };
            top: {
                title: string;
                type: string;
                default: string;
            };
        };
        title: string;
        type: string;
    };
    classNameText: {
        default: string;
        title: string;
        type: string;
    };
    colorText: {
        title: string;
        type: string;
        default: string;
        widget: {
            'ui:widget': string;
        };
    };
};
/**
 * Contiene los tipos de configuraciones para los banners a emplear
 */
export declare const configurationTypeItems: (customItems?: object | undefined) => {
    typeBanner: {
        oneOf: {
            properties: {
                xs: {
                    default: number;
                    enum: any;
                    enumNames: any;
                    title: string;
                    type: string;
                };
                sm: {
                    default: number;
                    enum: any;
                    enumNames: any;
                    title: string;
                    type: string;
                };
                md: {
                    default: number;
                    enum: any;
                    enumNames: any;
                    title: string;
                    type: string;
                };
                lg: {
                    default: number;
                    enum: any;
                    enumNames: any;
                    title: string;
                    type: string;
                };
                xl: {
                    default: number;
                    enum: any;
                    enumNames: any;
                    title: string;
                    type: string;
                };
                banner: {
                    items: {
                        properties: {
                            isCircle: {
                                default: boolean;
                                title: string;
                                type: string;
                            };
                            width: {
                                default: string;
                                enum: string[];
                                title: string;
                                type: string;
                            };
                            height: {
                                default: string;
                                enum: string[];
                                title: string;
                                type: string;
                            };
                            image: {
                                default: string;
                                title: string;
                                type: string;
                                widget: {
                                    'ui:widget': string;
                                };
                            };
                            mobileImage: {
                                default: string;
                                title: string;
                                type: string;
                                widget: {
                                    'ui:widget': string;
                                };
                            };
                            showName: {
                                default: boolean;
                                title: string;
                                type: string;
                            };
                            name: {
                                default: string;
                                title: string;
                                type: string;
                            };
                            borderRadiusWeb: {
                                default: string;
                                title: string;
                                type: string;
                            };
                            borderRadiusMobile: {
                                default: string;
                                title: string;
                                type: string;
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
                            showShadow: {
                                default: boolean;
                                title: string;
                                type: string;
                            };
                        } | {
                            isCircle: {
                                default: boolean;
                                title: string;
                                type: string;
                            };
                            width: {
                                default: string;
                                enum: string[];
                                title: string;
                                type: string;
                            };
                            height: {
                                default: string;
                                enum: string[];
                                title: string;
                                type: string;
                            };
                            image: {
                                default: string;
                                title: string;
                                type: string;
                                widget: {
                                    'ui:widget': string;
                                };
                            };
                            mobileImage: {
                                default: string;
                                title: string;
                                type: string;
                                widget: {
                                    'ui:widget': string;
                                };
                            };
                            showName: {
                                default: boolean;
                                title: string;
                                type: string;
                            };
                            name: {
                                default: string;
                                title: string;
                                type: string;
                            };
                            borderRadiusWeb: {
                                default: string;
                                title: string;
                                type: string;
                            };
                            borderRadiusMobile: {
                                default: string;
                                title: string;
                                type: string;
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
                            showShadow: {
                                default: boolean;
                                title: string;
                                type: string;
                            };
                        };
                        title: string;
                        type: string;
                    };
                    minItems: number;
                    title: string;
                    type: string;
                };
                typeBanner: {
                    enum: string[];
                };
            };
        }[];
    };
};
export declare const typeConfigurationToUse: {
    typeConfiguration: {
        oneOf: ({
            properties: {
                typeConfiguration: {
                    enum: string[];
                };
                typeBanner: {
                    title: string;
                    enum: string[];
                    enumNames: string[];
                    widget: {
                        'ui:widget': string;
                    };
                    default: string;
                };
            };
        } | {
            properties: {
                scrollOnDevice: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                marginElement: {
                    title: string;
                    type: string;
                    default: string;
                };
                padding: {
                    title: string;
                    type: string;
                    default: string;
                };
                width: {
                    default: string;
                    enum: string[];
                    title: string;
                    type: string;
                };
                maxWidth: {
                    default: string;
                    title: string;
                    type: string;
                };
                backgroundContent: {
                    default: string;
                    widget: {
                        'ui:widget': string;
                    };
                    title: string;
                    type: string;
                };
                height: {
                    default: string;
                    title: string;
                    type: string;
                };
                showSides: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                sideSizeMobile: {
                    default: number;
                    title: string;
                    type: string;
                };
                sideSizeWeb: {
                    default: number;
                    title: string;
                    type: string;
                };
                scroll: {
                    default: string;
                    title: string;
                    type: string;
                    enum: string[];
                    enumNames: string[];
                };
                showBorder: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                marginDots: {
                    title: string;
                    type: string;
                    default: string;
                };
                showDots: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                showDotsWeb: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                showDotsMobile: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                showArrows: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                showArrowsWeb: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                showArrowsMobile: {
                    default: boolean;
                    title: string;
                    type: string;
                };
                arrowPosition: {
                    properties: {
                        left: {
                            title: string;
                            type: string;
                            default: string;
                        };
                        right: {
                            title: string;
                            type: string;
                            default: string;
                        };
                        top: {
                            title: string;
                            type: string;
                            default: string;
                        };
                    };
                    title: string;
                    type: string;
                };
                classNameText: {
                    default: string;
                    title: string;
                    type: string;
                };
                colorText: {
                    title: string;
                    type: string;
                    default: string;
                    widget: {
                        'ui:widget': string;
                    };
                };
                typeConfiguration: {
                    enum: string[];
                };
                typeBanner?: undefined;
            };
        })[];
    };
};
export declare const schemaCarousel: (customItems?: object | undefined) => {
    description: string;
    dependencies: {
        typeBanner: {
            oneOf: {
                properties: {
                    xs: {
                        default: number;
                        enum: any;
                        enumNames: any;
                        title: string;
                        type: string;
                    };
                    sm: {
                        default: number;
                        enum: any;
                        enumNames: any;
                        title: string;
                        type: string;
                    };
                    md: {
                        default: number;
                        enum: any;
                        enumNames: any;
                        title: string;
                        type: string;
                    };
                    lg: {
                        default: number;
                        enum: any;
                        enumNames: any;
                        title: string;
                        type: string;
                    };
                    xl: {
                        default: number;
                        enum: any;
                        enumNames: any;
                        title: string;
                        type: string;
                    };
                    banner: {
                        items: {
                            properties: {
                                isCircle: {
                                    default: boolean;
                                    title: string;
                                    type: string;
                                };
                                width: {
                                    default: string;
                                    enum: string[];
                                    title: string;
                                    type: string;
                                };
                                height: {
                                    default: string;
                                    enum: string[];
                                    title: string;
                                    type: string;
                                };
                                image: {
                                    default: string;
                                    title: string;
                                    type: string;
                                    widget: {
                                        'ui:widget': string;
                                    };
                                };
                                mobileImage: {
                                    default: string;
                                    title: string;
                                    type: string;
                                    widget: {
                                        'ui:widget': string;
                                    };
                                };
                                showName: {
                                    default: boolean;
                                    title: string;
                                    type: string;
                                };
                                name: {
                                    default: string;
                                    title: string;
                                    type: string;
                                };
                                borderRadiusWeb: {
                                    default: string;
                                    title: string;
                                    type: string;
                                };
                                borderRadiusMobile: {
                                    default: string;
                                    title: string;
                                    type: string;
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
                                showShadow: {
                                    default: boolean;
                                    title: string;
                                    type: string;
                                };
                            } | {
                                isCircle: {
                                    default: boolean;
                                    title: string;
                                    type: string;
                                };
                                width: {
                                    default: string;
                                    enum: string[];
                                    title: string;
                                    type: string;
                                };
                                height: {
                                    default: string;
                                    enum: string[];
                                    title: string;
                                    type: string;
                                };
                                image: {
                                    default: string;
                                    title: string;
                                    type: string;
                                    widget: {
                                        'ui:widget': string;
                                    };
                                };
                                mobileImage: {
                                    default: string;
                                    title: string;
                                    type: string;
                                    widget: {
                                        'ui:widget': string;
                                    };
                                };
                                showName: {
                                    default: boolean;
                                    title: string;
                                    type: string;
                                };
                                name: {
                                    default: string;
                                    title: string;
                                    type: string;
                                };
                                borderRadiusWeb: {
                                    default: string;
                                    title: string;
                                    type: string;
                                };
                                borderRadiusMobile: {
                                    default: string;
                                    title: string;
                                    type: string;
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
                                showShadow: {
                                    default: boolean;
                                    title: string;
                                    type: string;
                                };
                            };
                            title: string;
                            type: string;
                        };
                        minItems: number;
                        title: string;
                        type: string;
                    };
                    typeBanner: {
                        enum: string[];
                    };
                };
            }[];
        };
        typeConfiguration: {
            oneOf: ({
                properties: {
                    typeConfiguration: {
                        enum: string[];
                    };
                    typeBanner: {
                        title: string;
                        enum: string[];
                        enumNames: string[];
                        widget: {
                            'ui:widget': string;
                        };
                        default: string;
                    };
                };
            } | {
                properties: {
                    scrollOnDevice: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    marginElement: {
                        title: string;
                        type: string;
                        default: string;
                    };
                    padding: {
                        title: string;
                        type: string;
                        default: string;
                    };
                    width: {
                        default: string;
                        enum: string[];
                        title: string;
                        type: string;
                    };
                    maxWidth: {
                        default: string;
                        title: string;
                        type: string;
                    };
                    backgroundContent: {
                        default: string;
                        widget: {
                            'ui:widget': string;
                        };
                        title: string;
                        type: string;
                    };
                    height: {
                        default: string;
                        title: string;
                        type: string;
                    };
                    showSides: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    sideSizeMobile: {
                        default: number;
                        title: string;
                        type: string;
                    };
                    sideSizeWeb: {
                        default: number;
                        title: string;
                        type: string;
                    };
                    scroll: {
                        default: string;
                        title: string;
                        type: string;
                        enum: string[];
                        enumNames: string[];
                    };
                    showBorder: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    marginDots: {
                        title: string;
                        type: string;
                        default: string;
                    };
                    showDots: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    showDotsWeb: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    showDotsMobile: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    showArrows: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    showArrowsWeb: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    showArrowsMobile: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    arrowPosition: {
                        properties: {
                            left: {
                                title: string;
                                type: string;
                                default: string;
                            };
                            right: {
                                title: string;
                                type: string;
                                default: string;
                            };
                            top: {
                                title: string;
                                type: string;
                                default: string;
                            };
                        };
                        title: string;
                        type: string;
                    };
                    classNameText: {
                        default: string;
                        title: string;
                        type: string;
                    };
                    colorText: {
                        title: string;
                        type: string;
                        default: string;
                        widget: {
                            'ui:widget': string;
                        };
                    };
                    typeConfiguration: {
                        enum: string[];
                    };
                    typeBanner?: undefined;
                };
            })[];
        };
    };
    properties: {
        showComponent: {
            title: string;
            type: string;
        };
        typeConfiguration: {
            title: string;
            enum: string[];
            enumNames: string[];
            widget: {
                'ui:widget': string;
            };
            default: string;
        };
    };
    title: string;
    type: string;
};
export {};
