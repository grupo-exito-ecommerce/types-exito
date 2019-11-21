import ApolloClient from 'apollo-client';
export interface ILogisticData {
    skuId: string;
    type: string;
    isProductMarket: boolean;
    client: ApolloClient<any>;
}
export interface DeliveryIds {
    warehouseId: any;
    courierId: any;
    dockId: any;
    courierName: any;
    quantity: any;
}
export interface Slas {
    id: any;
    name: any;
    price: any;
    shippingEstimate: any;
    shippingEstimateDate: any;
    deliveryIds: DeliveryIds;
}
export interface LogisticsInfo {
    itemIndex: any;
    slas: Slas;
}
