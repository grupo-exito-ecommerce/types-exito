declare type Items = {
    id: string;
    quantity: number;
    seller: string;
};
declare type OrderformSimulation = {
    items: Items[];
};
declare const GraphqlQuerySimulation: (variables: OrderformSimulation, client: any) => Promise<any>;
export default GraphqlQuerySimulation;
