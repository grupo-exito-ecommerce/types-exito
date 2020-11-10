import { NormalizeProduct } from '../../../index';
import { CommertialOffer, ProductProperties, Seller, UseProduct } from '../../../models';
/**
 * Method for validate if one product is type market
 * @param product
 */
export declare const useMarketplace: (product: IProductVtex) => boolean;
export declare const useNormalizeProduct: ({ product, sortSellers, selectedItem }: NormalizeProduct) => {
    commertialOffer: CommertialOffer | null;
    sellerId: string | null;
    seller: Seller | null;
    isAvailable: boolean;
    skuName: string | null;
    description: string | null;
    skuItems: ISelectedItemVtex[];
    product: IProductVtex;
    selectedItem: ISelectedItemVtex;
    sku: ISelectedItemVtex;
    productProperties: ProductProperties[] | null;
    isMarket: boolean;
    productInformation: IProductVtex;
};
/**
 * @returns UseProduct | null
 */
export declare function useProduct(): UseProduct | null;
export declare const useIsProductAvailable: (product: IProductVtex) => boolean | undefined;
