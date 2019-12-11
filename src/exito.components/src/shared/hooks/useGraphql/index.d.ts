import { ApolloClient } from 'apollo-client';
interface baseOptions {
    variables?: any;
    responseKeys: string[];
}
interface baseClientMutationOptions extends baseOptions {
    mutation: any;
}
interface baseClientQueryOptions extends baseOptions {
    query: any;
}
export declare const useGraphql: (client: ApolloClient<any>) => {
    mutation: (options: baseClientMutationOptions) => Promise<any>;
    query: (options: baseClientQueryOptions) => Promise<any>;
};
export {};
