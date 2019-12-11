import { Dispatch } from 'react';
export declare const MKPI_AVAILABLE = 100000;
export declare enum SALES_CHANNEL {
    COP = 1,
    USD = 2
}
export declare const generateSalesChannel: (sellerId?: string | undefined) => SALES_CHANNEL;
export declare const SESSION_STORAGE_KEY = "__sales_channel__";
export declare function useLocalStorage(key: string, initialValue?: string): [string, Dispatch<string>];
