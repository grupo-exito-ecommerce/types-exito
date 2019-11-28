import { ReactElement } from "react";
export interface INotFound {
    typeSearch: string;
    showNotFoundVtex: boolean;
    children: ReactElement[];
    searchCategory: object;
}
export interface IDeviceProps {
    agent: string;
    osToUse: {
        name: any;
        version: number;
    };
    browserToUse: {
        name: any;
        version: number;
    };
}
export interface IPushInformation {
    typeSearch: string;
    params: object;
    currentPath: string;
    deviceInformation: IDeviceProps | null;
    map: object;
    hints: object;
}
export interface SearchNotFoundView {
    term: string | null;
    searchCategory: ISearchCategory;
}
export interface ILinks {
    text: string;
    url: string;
}
export interface IRowsLinks {
    links: ILinks[];
}
export interface ISearchCategory {
    rows: IRowsLinks[];
}
export interface IContentNotFound {
    isMobile: boolean;
    term: string;
    searchCategory: ISearchCategory;
}
