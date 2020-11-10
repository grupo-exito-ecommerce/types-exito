import { ApolloClient, FetchPolicy } from 'apollo-client';
export declare const useMasterData: (client: ApolloClient<any>) => {
    getMasterData: (variables: any, fetchPolicy?: FetchPolicy) => Promise<any[] | null>;
};
