/// <reference types="react" />
import { CategoryComponentProps } from './models/models';
declare function UseThemeMaterial(props: CategoryComponentProps): JSX.Element;
declare namespace UseThemeMaterial {
    var defaultProps: {
        showComponent: boolean;
    };
    var getSchema: () => {
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
}
export default UseThemeMaterial;
