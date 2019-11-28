export declare const schemaCarousel: {
    description: string;
    properties: {
        showComponent: {
            title: string;
            type: string;
        };
        sponsoredText: {
            default: string;
            title: string;
            type: string;
        };
        width: {
            default: string;
            enum: string[];
            title: string;
            type: string;
        };
        autoplay: {
            title: string;
            type: string;
        };
        autoplaySpeed: {
            enum: number[];
            title: string;
            type: string;
            widget: {
                'ui:options': {
                    inline: boolean;
                };
                'ui:widget': string;
            };
        };
        banner: {
            default: {
                altImage: string;
                seoClass: string;
                name: string;
                image: string;
                sponsoredText: string;
                url: string;
                height: string;
                width: string;
                isCircle: boolean;
                showName: boolean;
                sponsored: boolean;
                showShadow: boolean;
            }[];
            items: {
                properties: {
                    sponsored: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    isCircle: {
                        default: boolean;
                        title: string;
                        type: string;
                    };
                    showName: {
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
                    containerWidth: {
                        default: string;
                        enum: string[];
                        title: string;
                        type: string;
                    };
                    containerHeight: {
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
                    name: {
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
        showArrows: {
            default: boolean;
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
        showDots: {
            default: boolean;
            title: string;
            type: string;
        };
        title: {
            default: string;
            title: string;
            type: string;
        };
        alignBannerTitle: {
            title: string;
            type: string;
            default: string;
            enum: string[];
            enumNames: string[];
        };
        marginElement: {
            title: string;
            type: string;
            default: string;
        };
        xs: {
            enum: any;
            enumNames: any;
            title: string;
            type: string;
        };
        sm: {
            enum: any;
            enumNames: any;
            title: string;
            type: string;
        };
        md: {
            enum: any;
            enumNames: any;
            title: string;
            type: string;
        };
        lg: {
            enum: any;
            enumNames: any;
            title: string;
            type: string;
        };
        xl: {
            enum: any;
            enumNames: any;
            title: string;
            type: string;
        };
    };
    title: string;
    type: string;
};
