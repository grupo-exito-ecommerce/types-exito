/// <reference types="react" />
interface ChildCategories {
    name: string;
    url: string;
}
interface AllInformation {
    message: string;
    url: string;
}
interface SeoClass {
    idAnalytics: string;
    classAnalytics: string;
}
interface Props {
    colorText: string;
    message: string;
    show_all_information: AllInformation;
    parent_category: string;
    seoAttribute: SeoClass;
    showTitleText: boolean;
    showViewMoreText: boolean;
    background_banner: string;
    maxWidthContent: string;
    marginElement: string;
    paddingContentItems: string;
    backgroundType: string;
    backgroundColor: string;
    primary_color: string;
    background_item_color: string;
    secondary_color: string;
    paddingElement: string;
    child_categories: ChildCategories[];
    showComponent: boolean;
    marginChip: string;
    heightChip: string;
}
declare const CategoryBanner: {
    (props: Props): JSX.Element | null;
    getSchema(): {
        description: string;
        default: {
            colorText: string;
            showComponent: boolean;
            primary_color: string;
            maxWidthContent: string;
            backgroundType: string;
            marginElement: string;
            paddingElement: string;
            showTitleText: boolean;
            showViewMoreText: boolean;
            secondary_color: string;
            background_item_color: string;
            message: string;
            parent_category: string;
            seoAttribute: {
                altAtribute: string;
                titleAtribute: string;
                idAnalytics: string;
                classAnalytics: string;
            };
            background_banner: string;
            show_all_information: {
                message: string;
                url: string;
            };
            child_categories: {
                name: string;
                url: string;
            }[];
        };
        dependencies: {
            showTitleText: {
                oneOf: {
                    properties: {
                        showTitleText: {
                            enum: boolean[];
                        };
                        message: {
                            default: string;
                            title: string;
                            type: string;
                        };
                        parent_category: {
                            default: string;
                            title: string;
                            type: string;
                        };
                    };
                }[];
            };
            showViewMoreText: {
                oneOf: {
                    properties: {
                        showViewMoreText: {
                            enum: boolean[];
                        };
                        show_all_information: {
                            properties: {
                                message: {
                                    default: string;
                                    title: string;
                                    type: string;
                                };
                                url: {
                                    default: string;
                                    title: string;
                                    type: string;
                                };
                            };
                            title: string;
                            type: string;
                        };
                    };
                }[];
            };
            backgroundType: {
                oneOf: ({
                    properties: {
                        backgroundType: {
                            enum: string[];
                        };
                        backgroundColor: {
                            default: string;
                            title: string;
                            type: string;
                            widget: {
                                'ui:widget': string;
                            };
                        };
                        background_banner?: undefined;
                    };
                } | {
                    properties: {
                        backgroundType: {
                            enum: string[];
                        };
                        background_banner: {
                            default: string;
                            title: string;
                            type: string;
                            widget: {
                                'ui:widget': string;
                            };
                        };
                        backgroundColor?: undefined;
                    };
                })[];
            };
        };
        properties: {
            showComponent: {
                default: boolean;
                title: string;
                type: string;
            };
            colorText: {
                default: string;
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            primary_color: {
                default: string;
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            secondary_color: {
                default: string;
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            background_item_color: {
                default: string;
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            maxWidthContent: {
                title: string;
                type: string;
                default: string;
            };
            marginElement: {
                title: string;
                type: string;
                default: string;
            };
            paddingElement: {
                title: string;
                type: string;
                default: string;
            };
            paddingContentItems: {
                title: string;
                type: string;
                default: string;
            };
            marginChip: {
                title: string;
                type: string;
                default: string;
            };
            heightChip: {
                title: string;
                type: string;
                default: string;
            };
            seoAttribute: {
                title: string;
                type: string;
                properties: {
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
            child_categories: {
                items: {
                    properties: {
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
                    };
                    title: string;
                    type: string;
                };
                minItems: number;
                title: string;
                type: string;
            };
            backgroundType: {
                title: string;
                enum: string[];
                enumNames: string[];
                widget: {
                    'ui:widget': string;
                };
                default: string;
            };
            showTitleText: {
                default: boolean;
                title: string;
                type: string;
            };
            showViewMoreText: {
                default: boolean;
                title: string;
                type: string;
            };
        };
        title: string;
        type: string;
    };
    defaultProps: {
        colorText: string;
        showComponent: boolean;
        primary_color: string;
        maxWidthContent: string;
        backgroundType: string;
        marginElement: string;
        paddingElement: string;
        showTitleText: boolean;
        showViewMoreText: boolean;
        secondary_color: string;
        background_item_color: string;
        message: string;
        parent_category: string;
        seoAttribute: {
            altAtribute: string;
            titleAtribute: string;
            idAnalytics: string;
            classAnalytics: string;
        };
        background_banner: string;
        show_all_information: {
            message: string;
            url: string;
        };
        child_categories: {
            name: string;
            url: string;
        }[];
    };
};
export default CategoryBanner;
