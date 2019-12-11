import { ApolloClient } from 'apollo-client';
declare type UseMKPIProps = {
    productContext: any;
    geolocationContext: any;
    client: ApolloClient<any>;
    sellerId: any;
};
export declare const useMKPI: (props: UseMKPIProps) => {
    policy: number;
    actionSales: string;
    salesChannel: string;
    changeChannel: () => Promise<void>;
    salesChannelProduct: string;
    showOverlay: boolean;
    clickedEvent: () => void;
    addToCart: (showToast: (message: string) => void) => Promise<void>;
    updateMoney: () => Promise<void>;
};
export {};
