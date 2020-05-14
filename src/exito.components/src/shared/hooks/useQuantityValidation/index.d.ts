export interface Quantity {
    category: string;
    postalCode: string;
    quantity: string;
}
export declare const useQuantityValidation: (productCategories: string[]) => {
    validaton: () => any;
};
