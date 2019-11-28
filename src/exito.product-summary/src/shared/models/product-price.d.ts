import ApolloClient from 'apollo-client';
import { ReactElement } from 'react';
import { ComponentsClasses, PriceComponentProps } from 'types-exito/src/exito.components/src/shared';
export declare type PriceProps = {
    children: ReactElement[];
    client: ApolloClient<any>;
    clasesComponents: ComponentsClasses;
} & PriceComponentProps;
