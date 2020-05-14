/// <reference types="react" />
import './global.css';
interface ServicesLinkItemLink {
    url: string;
    title: string;
    image: string;
    height: string;
}
interface ServicesBarProps {
    width: string;
    services: ServicesLinkItemLink[];
}
/**
 * Componente para los servicios que posee la aplicación
 * @class ServicesBar
 * @extends {React.Component}
 */
declare const ServicesBar: {
    (props: ServicesBarProps): JSX.Element | null;
    getSchema(): {
        title: string;
        type: string;
        properties: {
            services: {
                type: string;
                title: string;
                minItems: number;
                default: {
                    __editorItemTitle: string;
                    title: string;
                    url: string;
                }[];
                items: {
                    type: string;
                    title: string;
                    properties: {
                        title: {
                            title: string;
                            type: string;
                        };
                        url: {
                            type: string;
                            title: string;
                        };
                        image: {
                            title: string;
                            type: string;
                        };
                        height: {
                            type: string;
                            title: string;
                            default: string;
                        };
                    };
                };
            };
        };
    };
    defaultProps: {
        services: {
            __editorItemTitle: string;
            title: string;
            url: string;
        }[];
    };
};
export default ServicesBar;
