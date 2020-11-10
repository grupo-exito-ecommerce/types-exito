import { ApolloClient } from 'apollo-client';
export declare const useGeneralUserData: (client: ApolloClient<any>) => {
    email: string | undefined;
    clusters: string[];
};
