/// <reference types="react" />
interface SeoClass {
    altAtribute: string;
    titleAtribute: string;
    idAnalytics: string;
    classAnalytics: string;
}
interface Props {
    showComponent: boolean;
    typePattern: string;
    patternImage: string;
    patternImageMobile: string;
    showComponentOnMobile: boolean;
    showComponentOnWeb: boolean;
    seoAttribute: SeoClass;
    patternUrl: string;
    patternScriptSrc: string;
    patternScriptCode: string;
    patternScriptBody: string;
    patternHtml: string;
    mobileHeight: string;
    webHeight: string;
    mobileWidth: string;
    webWidth: string;
    marginElement: string;
    seoClassAtributes: string;
}
declare function UseThemeMaterial(props: Props): JSX.Element;
declare namespace UseThemeMaterial {
    var getSchema: () => {
        title: string;
    };
    var defaultProps: {
        showComponent: boolean;
        patternIsLink: boolean;
        showComponentOnMobile: boolean;
        showComponentOnWeb: boolean;
        patternIsHtml: boolean;
        patternAltImage: string;
        patternImage: string;
        patternUrl: string;
        patternHtml: string;
        mobileHeight: string;
        webHeight: string;
        mobileWidth: string;
        webWidth: string;
        marginElement: string;
        seoClassAtributes: string;
    };
}
export default UseThemeMaterial;
