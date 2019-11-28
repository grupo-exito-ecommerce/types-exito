import ApolloClient from 'apollo-client';
export interface SpecificationsProps {
    collapseContent: boolean;
    hiddenSpecifications: any[];
    visibleSpecifications: any[];
    specifications: any[];
    tabsMode: boolean;
    client: ApolloClient<any>;
}
export interface SpecificationsExito {
    key: string;
    values: any[];
}
export interface SpecificationsVtex {
    name: string;
    values: any[];
}
export interface Specifications {
    name: string;
    specifications: SpecificationsVtex[];
}
