/// <reference types="react" />
interface Categories {
    name: string;
    url: string;
}
interface Types {
    name: string;
    icon: string;
    sizeIcon: string;
    url: string;
    categories: Categories[];
}
interface Props {
    show: boolean;
    brand: string;
    types: Types[];
}
declare const MegaMenuTextil: {
    (props: Props): JSX.Element | null;
    defaultProps: {
        show: boolean;
        brand: string;
        types: {
            name: string;
            icon: string;
            sizeIcon: string;
            url: string;
            categories: {
                name: string;
                url: string;
            }[];
        }[];
    };
    getSchema(): {
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
};
export default MegaMenuTextil;
