/// <reference types="react" />
interface ILinks {
    name: string;
    icon: string;
    link: string;
    iconSize: string;
}
interface IProps {
    showComponent: boolean;
    titleMessage: string;
    iconTitle: string;
    iconTitleSize: string;
    links: ILinks[];
}
declare function HeaderTemplateNavigation(props: IProps): JSX.Element | null;
declare namespace HeaderTemplateNavigation {
    var getSchema: () => {
        title: string;
        type: string;
        default: {
            showComponent: boolean;
            titleMessage: string;
            iconTitleSize: string;
            iconTitle: string;
            links: {
                link: string;
                name: string;
                icon: string;
                iconSize: string;
            }[];
        };
        properties: {
            showComponent: {
                title: string;
                type: string;
                default: boolean;
            };
            titleMessage: {
                title: string;
                type: string;
            };
            iconTitle: {
                title: string;
                type: string;
                enum: any;
            };
            iconTitleSize: {
                title: string;
                type: string;
                enum: string[];
            };
            links: {
                minItems: number;
                type: string;
                items: {
                    properties: {
                        link: {
                            title: string;
                            type: string;
                        };
                        name: {
                            title: string;
                            type: string;
                        };
                        icon: {
                            title: string;
                            type: string;
                            enum: any;
                        };
                        iconSize: {
                            title: string;
                            type: string;
                            enum: string[];
                        };
                    };
                };
            };
        };
    };
}
export default HeaderTemplateNavigation;
