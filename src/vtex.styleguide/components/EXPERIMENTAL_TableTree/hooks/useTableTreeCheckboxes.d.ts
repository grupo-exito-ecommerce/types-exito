export default function useTableTreeCheckboxes({ items, onToggle, nodesKey, checked, comparator, }: hookInput): {
    checkedItems: Partial<{
        [key: string]: any;
    }>[];
    isChecked: (item: Partial<{
        [key: string]: any;
    }>) => boolean;
    isPartiallyChecked: (item: Partial<{
        [key: string]: any;
    }>) => boolean;
    itemTree: {
        [x: string]: string | Partial<{
            [key: string]: any;
        }>[];
        vtexTableTreeRoot: string;
    };
    toggle: (item: Partial<{
        [key: string]: any;
    }>) => void;
};
declare type hookInput = {
    items: Array<Item>;
    onToggle?: ({ checkedItems }: {
        checkedItems: any;
    }) => void;
    nodesKey?: string;
    checked?: Array<unknown>;
    comparator?: comparatorCurry;
};
export declare const defaultComparatorCurry: (item: Partial<{
    [key: string]: any;
}>) => (candidate: Partial<{
    [key: string]: any;
}>) => boolean;
export declare type ChildKey = {
    [key: string]: Array<Item>;
};
export declare type comparatorCurry = (item: any) => (candidate: any) => boolean;
export declare type Item = Partial<{
    [key: string]: any;
}>;
export {};
