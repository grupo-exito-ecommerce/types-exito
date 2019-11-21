/// <reference types="react" />
export interface Props {
    showComponent: boolean;
    children: any;
}
declare const ContentElement: {
    (props: Props): JSX.Element | null;
    getSchema(): {
        title: string;
        type: string;
        properties: {
            showComponent: {
                title: string;
                type: string;
            };
        };
    };
};
export default ContentElement;
