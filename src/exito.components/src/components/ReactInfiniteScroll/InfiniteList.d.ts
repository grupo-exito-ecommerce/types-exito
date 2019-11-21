import React from 'react';
interface Props {
    scrollContainer: 'window' | 'parent' | undefined;
    children: [];
    threshold: number;
    totalItemsToLoad: number;
    items: object[];
    setItems: React.Dispatch<React.SetStateAction<object[]>>;
}
declare function InfiniteList({ scrollContainer, children, threshold, totalItemsToLoad, items, setItems }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof InfiniteList>;
export default _default;
