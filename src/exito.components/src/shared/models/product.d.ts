export interface Fields {
    deliveryInterval?: string;
    policy?: string;
    sellerId?: string;
    warranty?: string;
    id?: string;
    skuId?: string;
}
export interface Seller {
    addToCartLink: string;
    commertialOffer: CommertialOffer;
    sellerDefault: boolean;
    sellerId: string;
    sellerName: string;
}
export interface CommertialOffer {
    AvailableQuantity: number;
    CacheVersionUsedToCallCheckout: string;
    Installments: any[];
    ListPrice: number;
    Price: number;
    PriceValidUntil: Date;
    PriceWithoutDiscount: number;
    RewardValue: number;
    Tax: number;
    discountHighlights: any[];
    teasers: any[];
}
export interface UseSellers {
    loading: boolean;
    items: ISelectedItemVtex;
    fullSellers: FullSellers[];
    availableSeller: FullSellers[];
    multiOffer: boolean;
    sortSellers: FullSellers[];
}
export interface DiscountHighlight {
    name: string;
}
export interface FullSellers {
    AvailableQuantity: number;
    CacheVersionUsedToCallCheckout: string;
    Installments: any[];
    ListPrice: number;
    Price: number;
    PriceValidUntil: Date;
    PriceWithoutDiscount: number;
    RewardValue: number;
    Tax: number;
    discountHighlights: DiscountHighlight[];
    teasers: any[];
    sellerDefault: boolean;
    sellerId: string;
    sellerName: string;
    commertialOffer: CommertialOffer;
}
export interface ProductProperties {
    name: string;
    values: string[];
}
export interface UseProduct {
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
}
export interface FieldMasterData {
    key: string;
    value: string;
}
export interface FieldMasterDataList {
    fields: FieldMasterData[];
}
export interface UseOffer {
    offer: FieldMasterDataList[] | null;
    policy: FieldMasterDataList[] | null;
    sellers: UseSellers;
}
export interface DiscountHighlight {
    name: string;
}
export interface Teaser {
    name: string;
}
export interface ProductBenefits {
    discountHighlights: DiscountHighlight[];
    itemId: string;
    productId: string;
    sellerId: string;
    teasers: Teaser[];
}
