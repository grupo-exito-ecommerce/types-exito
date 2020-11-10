/// <reference types="react" />
export interface Props {
    tabName: string;
    children: any;
}
declare const ContentTab: {
    (props: Props): JSX.Element | null;
    getSchema(): {
        title: string;
        type: string;
        properties: {
            tabName: {
                title: string;
                type: string;
                default: string;
            };
        };
    };
};
export default ContentTab;
