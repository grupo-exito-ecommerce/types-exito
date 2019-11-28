/// <reference types="react" />
interface Props {
    showComponent: string;
    pageSeoText: string;
    showContent: boolean;
    modifySeoTexts: boolean;
}
declare function TitlePage(props: Props): JSX.Element | null;
declare namespace TitlePage {
    var getSchema: () => {
        description: string;
        properties: {
            showComponent: {
                title: string;
                type: string;
            };
            showContent: {
                title: string;
                type: string;
            };
            modifySeoTexts: {
                title: string;
                type: string;
            };
            pageSeoText: {
                title: string;
                type: string;
                default: string;
                widget: {
                    'ui:widget': string;
                };
            };
        };
        title: string;
        type: string;
    };
}
export default TitlePage;
