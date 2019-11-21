import ApolloClient from 'apollo-client';
export declare const useProductPrice: (client: ApolloClient<any>, productContextToUse?: UseProduct | undefined) => {
    client: any;
    productContext: UseProduct;
    getListPrice: () => number | null;
    getSellingPrice: () => number | null;
    getBadgeDiscount: () => number | null;
    getBaseDiscount: () => number | null;
    getAlliesDiscount: () => number | null;
    getAlliesDiscountPrice: () => number | null;
    sellers: UseSellers;
    clases?: string | undefined;
    getBenefits: () => Promise<BenefitsQuery[]>;
    getBestTeaser: () => BestTeaser | null;
    parsePrice: (price: number) => number | null;
    currencyOptions: CurrencyOptions;
} | null;
