import { ApolloClient } from 'apollo-client';
import { addItemsToCartVariables, ResponseItem, updateItemsToCartVariables } from './shared';
export declare const useCartUtils: (client: ApolloClient<any>) => {
    addItems: (variables: addItemsToCartVariables) => Promise<ResponseItem[] | null>;
    updateItems: (variables: updateItemsToCartVariables) => Promise<ResponseItem[] | null>;
};
