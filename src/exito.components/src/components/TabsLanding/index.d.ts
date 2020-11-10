/// <reference types="react" />
interface Tabs {
    title: string;
}
interface Props {
    tabs: Tabs[];
    showComponent: boolean;
}
declare const TabsLanding: {
    (props: Props): JSX.Element | null;
    getSchema(): {
        title: string;
        type: string;
        properties: {
            showComponent: {
                default: boolean;
                title: string;
                type: string;
            };
            tabs: {
                default: {
                    title: string;
                }[];
                items: {
                    title: string;
                    type: string;
                    properties: {
                        title: {
                            default: string;
                            title: string;
                            type: string;
                        };
                    };
                };
                minItems: number;
                title: string;
                type: string;
            };
        };
    };
    defaultProps: {
        showComponent: boolean;
        tabs: {
            title: string;
        }[];
    };
};
export default TabsLanding;
