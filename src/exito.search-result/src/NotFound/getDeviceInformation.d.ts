/**
 * Logic for get the device information
 * Blog: https://bit.ly/2NiwvLF
 */
export interface Window {
    opera: any;
}
export declare var window: Window;
export declare const os: {
    name: string;
    value: string;
    version: string;
}[];
export declare const browser: {
    name: string;
    value: string;
    version: string;
}[];
export declare const header: any[];
export declare function matchItem(string: any, data: any): {
    name: any;
    version: number;
};
