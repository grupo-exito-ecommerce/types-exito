import { FullSellers, UseSellers, UseSellerData } from '../../../models';
import { useSellersSchema } from '../../../utils/useSellersSchema';
/**
 * useNormalizeSellers
 * @param selectedItem: ISelectedItemVtex
 * @param marketPlaceFields?: any[]
 */
export declare const useNormalizeSellers: (selectedItem: ISelectedItemVtex, marketPlaceFields?: any[] | undefined) => {
    loading: boolean;
    items: any;
    fullSellers: FullSellers[];
    availableSeller: FullSellers[];
    multiOffer: boolean;
    sortSellers: import("types-exito/src/exito.components/src/shared").FullSellers[];
    dollar: number;
};
/**
 * Hook to get the normalize seller information, this contain process for sort seller by priority
 */
export declare const useNormalizeSellersWithPriority: (selectedItem: ISelectedItemVtex) => UseSellers | null;
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
 * Additional hooks
 */
export { useSellersSchema, useSellersSchema as useSellers };
