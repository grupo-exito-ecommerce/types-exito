/// <reference types="react" />
import './global.css';
interface QueryResponse {
    content: string;
}
interface Props {
    showComponent: boolean;
    showContentNotFound: boolean;
    htmlUrl: string;
    contentIsHtml: boolean;
    contentIsUrl: boolean;
    htmlContent: string;
    data: {
        error: any;
        landing: QueryResponse;
    };
}
interface QueryResponse {
    loading: boolean;
    error: {};
    data: QueryResponse;
}
declare function HtmlRender(props: Props): JSX.Element | null;
declare namespace HtmlRender {
    var defaultProps: {
        showComponent: boolean;
        showContentNotFound: boolean;
        contentIsUrl: boolean;
        contentIsHtml: boolean;
    };
    var getSchema: () => {
        title: string;
        type: string;
        properties: {
            showComponent: {
                title: string;
                type: string;
                default: boolean;
            };
            showContentNotFound: {
                title: string;
                type: string;
                default: boolean;
            };
            contentIsUrl: {
                title: string;
                type: string;
            };
            htmlUrl: {
                title: string;
                type: string;
                format: string;
            };
            contentIsHtml: {
                title: string;
                type: string;
            };
            htmlContent: {
                title: string;
                type: string;
                widget: {
                    'ui:widget': string;
                };
            };
        };
    };
}
export default HtmlRender;
