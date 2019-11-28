import ApolloClient from 'apollo-client';
import { UseProduct } from 'types-exito/src/exito.components/src/shared';
export interface ProductImageProps extends WrapperProductImageProps {
    productToUse: UseProduct;
}
export interface WrapperProductImageProps {
    children: any;
    client: ApolloClient<any>;
    badgeClassName: string;
    showQuantityImage: boolean;
    badgeStyles: object;
    quantityStyles: object;
    quantityClassName: object;
    typeImage: 'productDetail' | 'searchResult' | 'shelf';
}
