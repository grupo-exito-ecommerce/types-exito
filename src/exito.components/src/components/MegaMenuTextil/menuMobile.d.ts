/// <reference types="react" />
interface Categories {
    name: string;
    url: string;
}
interface Types {
    name: string;
    icon: string;
    sizeIcon: string;
    url: string;
    categories: Categories[];
}
interface Data {
    brand: string;
    types: Types[];
}
interface Props {
    data: Data;
}
declare const MenuMobile: {
    (props: Props): JSX.Element;
    defaultProps: {
        data: {
            brand: string;
            types: {
                name: string;
                icon: string;
                sizeIcon: string;
                url: string;
                categories: {
                    name: string;
                    url: string;
                }[];
            }[];
        };
    };
};
export default MenuMobile;
