/// <reference types="react" />
export declare function getSelectedItem(skuId: string | undefined, items: Item[]): Item | undefined;
export declare const useProductReducer: ({ query, product }: ProductAndQuery) => [ProductContextState, import("react").Dispatch<Actions>];
