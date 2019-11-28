import { typeGrid } from './model';
export declare const schemaGridGallery: {
    dependencies: {
        typeConfiguration: {
            oneOf: ({
                properties: {
                    typeConfiguration: {
                        enum: string[];
                    };
                    rows: {
                        items: {
                            properties: {
                                margin: {
                                    title: string;
                                    type: string;
                                    default: string;
                                };
                                padding: {
                                    title: string;
                                    type: string;
                                    default: string;
                                };
                                maxWidth: {
                                    default: string;
                                    title: string;
                                    type: string;
                                };
                                boxShadow: {
                                    default: string;
                                    title: string;
                                    type: string;
                                };
                                typeGrid: {
                                    default: string;
                                    title: string;
                                    type: string;
                                    enum: typeGrid[];
                                };
                                spacing: {
                                    title: string;
                                    type: string;
                                    properties: {
                                        mobile: {
                                            title: string;
                                            type: string;
                                            properties: {
                                                columnGap: {
                                                    default: string;
                                                    title: string;
                                                    type: string;
                                                };
                                                gridRowGap: {
                                                    default: string;
                                                    title: string;
                                                    type: string;
                                                };
                                            };
                                        };
                                        web: {
                                            title: string;
                                            type: string;
                                            properties: {
                                                columnGap: {
                                                    default: string;
                                                    title: string;
                                                    type: string;
                                                };
                                                gridRowGap: {
                                                    default: string;
                                                    title: string;
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                                images: {
                                    items: {
                                        properties: {
                                            url: {
                                                default: string;
                                                title: string;
                                                type: string;
                                            };
                                            web: {
                                                title: string;
                                                type: string;
                                                properties: {
                                                    image: {
                                                        default: string;
                                                        title: string;
                                                        type: string;
                                                        widget: {
                                                            'ui:widget': string;
                                                        };
                                                    };
                                                    width: {
                                                        default: string;
                                                        title: string;
                                                        type: string;
                                                    };
                                                    height: {
                                                        default: string;
                                                        title: string;
                                                        type: string;
                                                    };
                                                    borderRadius: {
                                                        default: string;
                                                        title: string;
                                                        type: string;
                                                    };
                                                };
                                            };
                                            mobile: {
                                                title: string;
                                                type: string;
                                                properties: {
                                                    image: {
                                                        default: string;
                                                        title: string;
                                                        type: string;
                                                        widget: {
                                                            'ui:widget': string;
                                                        };
                                                    };
                                                    width: {
                                                        default: string;
                                                        title: string;
                                                        type: string;
                                                    };
                                                    height: {
                                                        default: string;
                                                        title: string;
                                                        type: string;
                                                    };
                                                    borderRadius: {
                                                        default: string;
                                                        title: string;
                                                        type: string;
                                                    };
                                                };
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
                                        title: string;
                                        type: string;
                                    };
                                    minItems: number;
                                    title: string;
                                    type: string;
                                };
                            };
                        };
                        minItems: number;
                        title: string;
                        type: string;
                    };
                    paddingContent?: undefined;
                    marginContent?: undefined;
                    backgroundContent?: undefined;
                };
            } | {
                properties: {
                    paddingContent: {
                        default: string;
                        title: string;
                        type: string;
                    };
                    marginContent: {
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
                    typeConfiguration: {
                        enum: string[];
                    };
                    rows?: undefined;
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
    default: import("./model").IGridProps;
    type: string;
};
