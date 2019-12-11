import React from 'react';
import ApolloClient from 'apollo-client';
declare const _default: React.MemoExoticComponent<{
    (props: {
        sku?: ISelectedItemVtex;
        client?: ApolloClient<any>;
    }): JSX.Element;
    defaultProps: {
        sku: string;
    };
    schema: {
        title: string;
        description: string;
        type: string;
        properties: {
            sku: {
                type: string;
                title: string;
                default: string;
            };
        };
    };
}>;
export default _default;
