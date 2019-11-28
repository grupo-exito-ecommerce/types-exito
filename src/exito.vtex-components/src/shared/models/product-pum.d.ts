import ApolloClient from 'apollo-client';
export interface ProductPumLabelProps {
    sku: ISelectedItemVtex;
    skuId: string;
    sellerId: string;
    handleOpen: (info: any) => void;
    isOpen: boolean;
    handleClose: () => void;
    infoCombo: string;
    productName: string;
    client: ApolloClient<any>;
}
