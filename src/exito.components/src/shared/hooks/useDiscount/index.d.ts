export interface DiscountProps {
    getBaseDiscount: (sellingPrice: any, listPrice: any) => any | null;
    calculateDiscount: (firstPrice: any, secondPrice: any) => any | null;
}
export declare const useDiscount: () => DiscountProps;
