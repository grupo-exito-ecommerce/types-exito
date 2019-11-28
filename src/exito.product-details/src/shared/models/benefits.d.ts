import ApolloClient from 'apollo-client';
import { UseProduct, FullSellers, ProductProperties, Fields } from 'types-exito/src/exito.components/src/shared';
interface IconConfiguration {
    icon: string;
    color: string;
    size: string;
    viewBox: string;
}
interface TextWithMessage {
    text: string;
    message: string;
}
interface TextWithIconAndMessage {
    className?: string;
    text: string;
    message: string;
    icon: IconConfiguration;
}
export interface BenefitsTextProps {
    viewMoreOffers: TextWithMessage;
    soldBy: TextWithIconAndMessage;
    sendBy: TextWithIconAndMessage;
    notApplyPrime: TextWithIconAndMessage;
    dontEarnPointColombia: TextWithIconAndMessage;
    applyExitoPrime: TextWithIconAndMessage;
    notApplyBuyAndCollect: TextWithIconAndMessage;
    timeOfDeliver: TextWithIconAndMessage;
    productGuarantee: TextWithIconAndMessage;
    termsAndConditions: string;
}
export interface WrapperBenefitsProps {
    client?: ApolloClient<any>;
    productContext?: UseProduct;
    benefitsTexts: BenefitsTextProps;
}
export interface BenefitsProps {
    client: ApolloClient<any>;
    productContext: UseProduct;
    benefitsTexts: BenefitsTextProps;
}
export interface BenefitsViewProps extends BenefitsProps {
    benefitsType?: any[];
    productContext: UseProduct;
    isProductMarket: boolean;
    multiOffer: boolean;
    sortSellers: FullSellers[];
    selectedItem: ISelectedItemVtex;
    categories: string[];
    skuId: string;
    seller?: FullSellers | null;
    typeBenefit?: number;
    productProperties: ProductProperties[];
    isPauta: string | null;
    field: Fields[];
    otherOffer?: number;
    numberOfOffers?: number;
    currentField: Fields | null;
    haveAdditionalOffers: boolean;
    isExito: boolean;
}
export {};
