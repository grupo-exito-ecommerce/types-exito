/// <reference types="react" />
interface MetaTag {
    meta: string;
}
interface LinkTag {
    link: string;
}
interface Props {
    id: string;
    html: string;
    title: string;
    tagsMeta: MetaTag[];
    tagsLink: LinkTag[];
}
declare const Landing: {
    (props: Props): JSX.Element;
    defaultProps: {
        id: string;
        html: string;
        title: string;
        tagsMeta: {
            meta: string;
        }[];
        tagsLink: {
            link: string;
        }[];
    };
    getSchema(): {
        type: string;
        title: string;
        properties: {
            id: {
                title: string;
                default: string;
                type: string;
            };
            html: {
                title: string;
                default: string;
                type: string;
            };
            title: {
                title: string;
                default: string;
                type: string;
            };
            tagsMeta: {
                type: string;
                title: string;
                minItems: number;
                items: {
                    type: string;
                    title: string;
                    properties: {
                        meta: {
                            title: string;
                            type: string;
                            default: string;
                        };
                    };
                };
            };
            tagsLink: {
                type: string;
                title: string;
                minItems: number;
                items: {
                    type: string;
                    title: string;
                    properties: {
                        link: {
                            title: string;
                            type: string;
                            default: string;
                        };
                    };
                };
            };
        };
    };
};
export default Landing;
