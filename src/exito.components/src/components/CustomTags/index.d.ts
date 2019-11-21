/// <reference types="react" />
interface CustomTagScriptsProps {
    name: string;
    scripts: string;
    applyConfig: boolean;
    runOnlyOnce: boolean;
    triggerConfig: {
        trigger: string;
        customTrigger?: string;
    };
}
interface CustomTagEventProps {
    loadScripts: boolean;
    customTags: CustomTagScriptsProps[];
}
declare function CustomTags(props: CustomTagEventProps): JSX.Element | null;
declare namespace CustomTags {
    var defaultProps: CustomTagEventProps;
    var getSchema: () => {
        title: string;
        description: string;
        type: string;
        default: CustomTagEventProps;
        properties: {
            loadScripts: {
                title: string;
                type: string;
                default: boolean;
            };
        };
    };
}
export default CustomTags;
