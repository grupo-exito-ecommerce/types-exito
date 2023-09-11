export interface Quantity {
    category: string;
    postalCode?: string;
    dependencyCode?: string;
    dateStart?: string;
    dateEnd?: string;
    quantity?: string;
    defaulMessage?: string;
    message?: string;
}
/**
  * useQuantityValidation retorna una sola restricción de compara a cada producto
*/
export declare const useQuantityValidation: (productCategories: string[], orderForm: string[], itemId: string) => {
  validaton: () => any;
  giftBoxInOrder: () => null;
  gftCardInOrder: () => boolean | number;
};
