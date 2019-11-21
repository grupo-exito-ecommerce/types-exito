import { ApolloClient } from 'apollo-client';
export declare const useMasterData: (client: ApolloClient<any>) => {
    getMasterData: (variables: any) => Promise<any[] | null>;
};
