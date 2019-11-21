/// <reference types="react" />
interface LoaderTemplateProps {
    children: [];
    scrollParent: boolean;
    maxHeight: string;
    maxWidth: string;
    totalItemsToLoad: number;
    threshold: number;
    backgroundLoader: string;
}
declare function LoaderTemplate(props: LoaderTemplateProps): JSX.Element | null;
declare namespace LoaderTemplate {
    var defaultProps: {
        totalItemsToLoad: number;
        scrollParent: boolean;
        threshold: number;
        backgroundLoader: string;
        children: never[];
        maxHeight: string;
        maxWidth: string;
    };
    var getSchema: () => {
        title: string;
    };
}
export default LoaderTemplate;
