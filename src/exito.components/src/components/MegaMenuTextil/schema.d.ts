export declare const schemaMenu: {
    title: string;
    type: string;
    properties: {
        show: {
            title: string;
            default: boolean;
            type: string;
        };
        brand: {
            title: string;
            default: string;
            type: string;
        };
        types: {
            title: string;
            type: string;
            minItems: number;
            items: {
                title: string;
                type: string;
                properties: {
                    __editorItemTitle: {
                        title: string;
                        type: string;
                        default: string;
                    };
                    name: {
                        title: string;
                        default: string;
                        type: string;
                    };
                    icon: {
                        title: string;
                        default: string;
                        type: string;
                    };
                    sizeIcon: {
                        title: string;
                        type: string;
                        default: string;
                    };
                    url: {
                        title: string;
                        type: string;
                        default: string;
                    };
                    categories: {
                        title: string;
                        type: string;
                        minItems: number;
                        items: {
                            title: string;
                            type: string;
                            properties: {
                                __editorItemTitle: {
                                    title: string;
                                    type: string;
                                    default: string;
                                };
                                name: {
                                    title: string;
                                    default: string;
                                    type: string;
                                };
                                url: {
                                    title: string;
                                    default: string;
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
