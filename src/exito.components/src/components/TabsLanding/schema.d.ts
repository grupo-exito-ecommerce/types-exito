export declare const schemaTabsLanding: {
    title: string;
    type: string;
    properties: {
        showComponent: {
            default: boolean;
            title: string;
            type: string;
        };
        tabs: {
            default: {
                title: string;
            }[];
            items: {
                title: string;
                type: string;
                properties: {
                    title: {
                        default: string;
                        title: string;
                        type: string;
                    };
                };
            };
            minItems: number;
            title: string;
            type: string;
        };
    };
};
