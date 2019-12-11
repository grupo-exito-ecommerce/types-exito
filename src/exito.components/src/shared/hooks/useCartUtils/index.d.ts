import { ApolloClient } from 'apollo-client';
import { addItemsToCartVariables, updateItemsToCartVariables } from './shared';
export declare const useCartUtils: (client: ApolloClient<any>) => {
    addItems: (variables: addItemsToCartVariables) => Promise<never[]>;
    updateItems: (variables: updateItemsToCartVariables) => Promise<never[]>;
};
