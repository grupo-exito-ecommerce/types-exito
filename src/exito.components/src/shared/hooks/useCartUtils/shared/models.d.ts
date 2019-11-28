export interface ItemCart {
    id: string;
    quantity: number;
    seller: string | undefined;
    index: number;
}
interface baseItemsToCartVariables {
    items: ItemCart[];
}
export interface updateItemsToCartVariables extends baseItemsToCartVariables {
}
export interface addItemsToCartVariables extends baseItemsToCartVariables {
}
export interface ResponseItem {
    additionalInfo: {
        brandName: string;
    };
    assemblyOptions: {
        parentPrice: number;
        added: Array<number>;
        removed: Array<number>;
    };
    cartIndex: number;
    detailUrl: string;
    id: string;
    imageUrl: string;
    index: any;
    listPrice: number;
    localStatus: string;
    name: string;
    options: any;
    parentAssemblyBinding: any;
    parentItemIndex: any;
    productCategories: {
        [key: number]: string;
    };
    productCategoryIds: string;
    productRefId: string;
    quantity: number;
    seller: string;
    sellingPrice: number;
    sellingPriceWithAssemblies: number;
    skuName: string;
}
export {};
