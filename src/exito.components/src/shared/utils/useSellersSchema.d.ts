import { FullSellers } from '../models';
export declare const useSellersSchema: (selectedItem?: ISelectedItemVtex | undefined) => {
    loading: boolean;
    items: any;
    fullSellers: FullSellers[];
    availableSeller: FullSellers[];
    multiOffer: boolean;
    sortSellers: FullSellers[];
    dollar: number;
};
