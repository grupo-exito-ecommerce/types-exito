import { ProductModel } from './product';
import { TotalizersModel } from './totalizers';
interface OrderForm {
    orderFormId: string;
    items: Array<ProductModel>;
    totalizers: Array<TotalizersModel>;
}
export interface OrderFormContextModel {
    orderForm: {
        orderFormId: string;
        items: Array<ProductModel>;
        totalizers: Array<TotalizersModel>;
        shippingData: any;
    };
    updateOrderFormShipping: any;
    refetch: () => Promise<{
        data: {
            orderForm: OrderForm;
        };
        errors: any;
        loading: boolean;
    }>;
}
export {};
