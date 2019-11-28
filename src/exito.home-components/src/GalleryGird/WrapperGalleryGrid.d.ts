import { ReactElement } from 'react';
interface WrapperProps {
    children: ReactElement[];
    showComponent: boolean;
}
declare const WrapperGalleryGrid: {
    (props: WrapperProps): ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>[] | null;
    getSchema(): {
        properties: {
            showComponent: {
                default: boolean;
                title: string;
                type: string;
            };
        };
        title: string;
        type: string;
    };
    defaultProps: {
        showComponent: boolean;
    };
};
export default WrapperGalleryGrid;
