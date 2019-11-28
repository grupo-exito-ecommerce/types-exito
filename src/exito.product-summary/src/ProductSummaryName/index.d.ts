import { ReactElement } from 'react';
interface ProductSummaryProps {
    showFieldsProps: {
        showProductReference: boolean;
        showBrandName: boolean;
        showSku: boolean;
    };
    brandNameClass: string;
    children: ReactElement[];
    className: string;
    styles: object;
    containerClassName: string;
}
declare const ProductSummaryName: {
    (props: ProductSummaryProps): JSX.Element | null;
    defaultProps: {
        showFieldsProps: {
            showProductReference: boolean;
            showBrandName: boolean;
            showSku: boolean;
            className: string;
            styles: {};
            brandNameClass: string;
        };
    };
};
export default ProductSummaryName;
