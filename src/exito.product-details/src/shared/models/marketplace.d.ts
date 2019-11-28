import ApolloClient from 'apollo-client';
import { ReactElement } from 'react';
import { UseProduct, UseSellers, Fields, ComponentsClasses, FullSellers } from 'types-exito/src/exito.components/src/shared';
export interface ITextsConfiguration {
    soldBy: string;
    notIsPrime: string;
    dontEarnPointColombia: string;
    notIsBuyAndCollect: string;
    delivery: string;
    guaranteeOfTheProduct: string;
    viewTermsAndConditionsOfTheSeller: string;
}
export interface IContainerProperties {
    id: string;
    className: string;
    styles: object;
}
export interface ITitleConfiguration {
    tag: string;
    className: string;
    style: object;
    text: string;
}
export interface IUseMarketplaceProps {
    productContext: UseProduct | null;
    containerMarketplace: IContainerProperties;
    sellers: UseSellers;
    field: Fields[];
    viewMoreText: string;
    viewMinusText: string;
}
export interface IMarketplaceView extends IMarketplace {
    useMarket: IUseMarketplaceList | null;
    field: Fields[];
    productContext: UseProduct;
    isExito: boolean;
}
export interface MarketplaceProps {
    containerMarketplace: IContainerProperties;
    titleConfiguration: ITitleConfiguration;
    viewMoreText: string;
    viewMinusText: string;
    textsConfiguration: ITextsConfiguration;
    children?: ReactElement[];
    classesComponents: ComponentsClasses;
}
export interface IMarketplace extends MarketplaceProps {
    client: ApolloClient<any>;
    productContext: UseProduct;
}
export interface WrapperIMarketplace extends MarketplaceProps {
    client?: ApolloClient<any>;
    productContext?: UseProduct;
}
export interface IMarketplaceList extends IMarketplaceView, IUseMarketplaceList {
}
export interface IUseMarketplaceList {
    /**
     * Method to action on update Items
     * @param e
     */
    onUpdateItemsState: (e: any) => void;
    /** Manage the option to show more information */
    showMore: () => void;
    /**
     * Set the policy information
     * @param policy
     */
    renderPolicy: (policy: string) => void;
    /** Manage if redirect to the position of the container */
    configureMarketplace: () => void;
    /**
     * Set the state of the container and set the seller Name
     * @param seller
     */
    handleOpen: (seller: FullSellers) => void;
    show: boolean;
    open: boolean;
    name: string;
    policy: string;
    nameShowMore: string;
    indexPagination: number;
    sortSellers: FullSellers[];
    sellersUpdated: FullSellers[];
}
