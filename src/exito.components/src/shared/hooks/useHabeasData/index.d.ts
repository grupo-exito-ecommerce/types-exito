import { ApolloClient } from 'apollo-client';
declare type Map = {
    [key: string]: string;
};
interface AcceptTerms {
    id: string;
    email: string;
    acceptCookiesPolicy: string;
}
export declare const useHabeasData: (client: ApolloClient<any>) => {
    searchClient: (email: string) => Promise<string | null>;
    createClient: (fields: Map) => Promise<string | null>;
    updateClient: (fields: Map) => Promise<string | null>;
    acceptTerms: (params: Partial<AcceptTerms>) => Promise<boolean>;
    acceptCookies: (email: string) => Promise<boolean>;
};
export {};
