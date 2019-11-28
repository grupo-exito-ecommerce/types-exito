/// <reference types="react" />
interface PromiseItem {
    name: string;
    message: string;
    image: string;
    mobileImage: string;
    width: string;
    mobileWidth: string;
}
interface Props {
    showComponent: boolean;
    promiseItems: PromiseItem[];
}
declare const PromisesBanner: {
    (props: Props): JSX.Element | null;
    defaultProps: {
        promiseItems: {
            name: string;
            message: string;
            image: string;
            mobileImage: string;
            mobileWidth: string;
            width: string;
        }[];
        showComponent: boolean;
    };
    getSchema(): {
        title: string;
        type: string;
        properties: {
            showComponent: {
                title: string;
                type: string;
                default: boolean;
            };
            promiseItems: {
                default: {
                    name: string;
                    message: string;
                    image: string;
                    mobileImage: string;
                    mobileWidth: string;
                    width: string;
                }[];
                title: string;
                type: string;
                items: {
                    title: string;
                    type: string;
                    properties: {
                        name: {
                            default: string;
                            title: string;
                            type: string;
                            minLength: number;
                            maxLength: number;
                        };
                        message: {
                            default: string;
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
                        width: {
                            default: string;
                            enum: string[];
                            title: string;
                            type: string;
                        };
                        mobileWidth: {
                            default: string;
                            enum: string[];
                            title: string;
                            type: string;
                        };
                    };
                };
            };
        };
    };
};
export default PromisesBanner;
