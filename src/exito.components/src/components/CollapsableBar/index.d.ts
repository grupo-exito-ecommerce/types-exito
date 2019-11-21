import { ReactNode } from 'react';
interface CollapsableBarProps {
    titleId: string;
    iconMinusName: string;
    iconPlusName: string;
    useShadowRoot: boolean;
    onChangeShowMinus?: (show: boolean) => void;
    showMinus: boolean;
    children: ReactNode;
}
declare const CollapsableBar: {
    (props: CollapsableBarProps): JSX.Element;
    getSchema: {
        titleId: string;
        description: string;
        type: string;
        properties: {
            title: {
                type: string;
                title: string;
                default: string;
            };
            iconMinusName: {
                type: string;
                title: string;
                default: string;
            };
            iconPlusName: {
                type: string;
                title: string;
                default: string;
            };
        };
    };
};
export default CollapsableBar;
