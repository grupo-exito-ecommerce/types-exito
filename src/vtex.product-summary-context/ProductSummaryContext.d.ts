/// <reference types="react" />
interface State {
    product: any;
    isHovering: boolean;
    isLoading: boolean;
    selectedItem: any;
    selectedQuantity: number;
    productQuery?: string;
}
declare type Dispatch = (action: Action) => void;
declare type SetProductAction = {
    type: 'SET_PRODUCT';
    args: {
        product: any;
    };
};
declare type SetProductQueryAction = {
    type: 'SET_PRODUCT_QUERY';
    args: {
        query: string;
    };
};
declare type SetHoverAction = {
    type: 'SET_HOVER';
    args: {
        isHovering: boolean;
    };
};
declare type SetLoadingAction = {
    type: 'SET_LOADING';
    args: {
        isLoading: boolean;
    };
};
declare type SetProductQuantity = {
    type: 'SET_QUANTITY';
    args: {
        quantity: number;
    };
};
declare type Action = SetProductAction | SetHoverAction | SetLoadingAction | SetProductQuantity | SetProductQueryAction;
export declare function reducer(state: State, action: Action): State | {
    query: string;
    product: any;
    isHovering: boolean;
    isLoading: boolean;
    selectedItem: any;
    selectedQuantity: number;
    productQuery?: string;
};
declare function ProductSummaryProvider({ product, children }: {
    product: any;
    children: any;
}): JSX.Element;
declare function useProductSummaryDispatch(): Dispatch;
declare function useProductSummary(): State;
declare const _default: {
    ProductSummaryProvider: typeof ProductSummaryProvider;
    useProductSummary: typeof useProductSummary;
    useProductSummaryDispatch: typeof useProductSummaryDispatch;
};
export default _default;
