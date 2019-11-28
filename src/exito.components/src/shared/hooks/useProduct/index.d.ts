import { Fields, UseOffer, UseProduct, UseSellers } from '../../models';
import { NormalizeProduct, UseSellerData } from '../../index';
/**
 * Hook to get the normalize seller information on product detail
 */
export declare function useSellers(selectedItem: ISelectedItemVtex): UseSellers;
/**
 * Hook to get the normalize seller information
 */
export declare const useNormalizeSellers: (selectedItem: ISelectedItemVtex) => UseSellers | null;
/**
 * Method for validate if one product is type market
 * @param product
 */
export declare const isMarket: (product: IProductVtex) => boolean;
/**
 * @returns UseProduct | null
 */
export declare function useProduct(): UseProduct | null;
export declare const useNormalizeProduct: ({ product, sortSellers, selectedItem }: NormalizeProduct) => UseProduct | null;
/**
 * Hook to get the fields from one product
 */
export declare function useSellerData(props: UseSellerData): {
    getSellerData: () => {
        acronym: string;
        fields: string[];
        where: string;
    }[] | null;
};
/**
 * Received the offers from master data and the current seller information
 * @param offer: SellerCenter offer
 * @param policy: Marketplace offer
 */
export declare function useOffer(props: UseOffer): Fields[] | null;
export declare const isProductAvailable: (product: IProductVtex) => boolean;
