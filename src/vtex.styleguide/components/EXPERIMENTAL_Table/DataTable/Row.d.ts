import { FC } from 'react';
declare const Row: FC<RowProps> & RowComposites;
export declare const Cell: FC<CellProps>;
export declare type RowComposites = {
    Cell: FC<CellProps>;
};
export declare type CellProps = {
    id?: string;
    width?: number;
    as?: 'td' | 'th' | 'div' | 'li';
    className?: string;
    onClick?: () => void;
};
export declare type RowProps = {
    as?: 'tr' | 'div' | 'ul';
    active?: boolean;
    height?: number;
    onClick?: () => void;
};
export default Row;
