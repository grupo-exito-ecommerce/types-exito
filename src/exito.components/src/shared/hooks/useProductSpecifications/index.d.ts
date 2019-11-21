import { ApolloClient } from 'apollo-client';
export declare const useProductSpecifications: (client: ApolloClient<any>) => {
    getSpecifications: (plu: string) => Promise<any[] | null>;
};
