/// <reference types="react" />
import { TitleProps } from '../shared';
declare const CarouselTitle: {
    (props: TitleProps): JSX.Element | null;
    getSchema(): {
        title: string;
        type: string;
        default: TitleProps;
        properties: {
            showComponent: {
                title: string;
                type: string;
            };
            tag: {
                default: string;
                title: string;
                type: string;
            };
            title: {
                default: string;
                title: string;
                type: string;
            };
            titleTextClassName: {
                default: string;
                title: string;
                type: string;
            };
            margin: {
                default: string;
                title: string;
                type: string;
            };
            padding: {
                default: string;
                title: string;
                type: string;
            };
            align: {
                title: string;
                type: string;
                default: string;
                enum: string[];
                enumNames: string[];
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
            goToLinkText: {
                default: string;
                title: string;
                type: string;
            };
            goToLinkColor: {
                default: string;
                widget: {
                    'ui:widget': string;
                };
                title: string;
                type: string;
            };
            goToLinkUrl: {
                default: string;
                title: string;
                type: string;
            };
        };
    };
    defaultProps: TitleProps;
};
export default CarouselTitle;
