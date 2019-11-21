import { ApolloClient } from 'apollo-client';
import { LogisticsInfo } from '../../models/logisticData';
/**
 * Hook for get the logistic information from the product
 * @param client
 */
export declare const useLogisticData: (client: ApolloClient<any>) => {
    getLogisticData: (variables: any) => Promise<LogisticsInfo | null>;
};
