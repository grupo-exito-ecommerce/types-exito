import { FullSellers } from 'types-exito/src/exito.components/src/shared';
/**
 * Method for get the SellerId from the selectedItem
 * @param sellers
 * @param selectedItem
 */
export declare const sellerId: (sellers: FullSellers[], selectedItem: ISelectedItemVtex) => unknown;
/**
 * Method for get the price from the seller
 * @param seller
 */
export declare const getPrice: (seller: FullSellers) => number;
/**
 * Benefits list values
 */
export declare enum benefitsList {
    sold = 0,
    sent = 1,
    prime = 2,
    buyAndCollect = 3,
    typeOfDelivery = 4,
    warranty = 5,
    policies = 6,
    otherOffers = 7,
    asYouLike = 8,
    calculateCost = 9,
    notIsPrime = 10,
    notIsBuyAndCollect = 11
}
export declare const marketType: benefitsList[];
export declare const marketplaceType: benefitsList[];
export declare const comercialType: benefitsList[];
export declare enum typeBenefits {
    market = 0,
    marketplace = 1,
    commertial = 2
}
