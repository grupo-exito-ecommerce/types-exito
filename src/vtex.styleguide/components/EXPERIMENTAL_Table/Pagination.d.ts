import { FC } from 'react';
declare const Pagination: FC<PaginationProps>;
export declare type PaginationProps = {
    textShowRows: string;
    textOf: string;
    rowsOptions: Array<number>;
    currentItemFrom: number;
    currentItemTo: number;
    totalItems: number;
    onNextClick: (e: any) => void;
    onPrevClick: (e: any) => void;
    onRowsChange: (e: any, value: any) => void;
};
export default Pagination;
