/// <reference types="react" />
interface Props {
    showBorder: boolean;
    marginContent: string;
    showComponent: boolean;
    coverImage: string;
    maxWidthContent: string;
    parentCategory: string;
    message: string;
    borderColor: string;
    fullBorder: boolean;
    textColor: string;
    heightContent: string;
    backgruondImage: boolean;
    textSize: string;
    titleTextAlign: string;
    backgroundColor: string;
    tag: string;
}
declare const HomeCategoryTitle: {
    (props: Props): JSX.Element | null;
    defaultProps: Props;
    getSchema(): {
        title: string;
        type: string;
        default: Props;
        properties: {
            showComponent: {
                title: string;
                type: string;
                default: boolean;
            };
            backgruondImage: {
                title: string;
                type: string;
                default: boolean;
            };
            coverImage: {
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            backgroundColor: {
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            fullBorder: {
                title: string;
                type: string;
                default: boolean;
            };
            borderColor: {
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            textColor: {
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
            tag: {
                default: string;
                title: string;
                type: string;
            };
            message: {
                title: string;
                type: string;
            };
            parentCategory: {
                title: string;
                type: string;
            };
            textSize: {
                title: string;
                type: string;
                default: string;
                enum: string[];
            };
            titleTextAlign: {
                title: string;
                type: string;
                default: string;
                enum: string[];
                enumNames: string[];
            };
            marginContent: {
                title: string;
                type: string;
                default: string;
            };
            maxWidthContent: {
                title: string;
                type: string;
                default: string;
            };
            heightContent: {
                title: string;
                type: string;
                enum: string[];
            };
            showBorder: {
                default: boolean;
                title: string;
                type: string;
            };
        };
    };
};
export default HomeCategoryTitle;
