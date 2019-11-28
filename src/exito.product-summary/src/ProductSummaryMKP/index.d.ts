import React from 'react';
interface ProductSummaryMKProps {
    container: {
        className: string;
        styles: object;
    };
    texts: {
        quantity: {
            text: string;
            className: string;
            styles: object;
        };
        value: {
            text: string;
            className: string;
            styles: object;
        };
    };
}
declare const _default: React.MemoExoticComponent<{
    (props: ProductSummaryMKProps): JSX.Element | null;
    defaultProps: ProductSummaryMKProps;
}>;
export default _default;
