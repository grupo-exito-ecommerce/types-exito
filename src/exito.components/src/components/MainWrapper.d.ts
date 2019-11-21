import { FC } from 'react';
interface MainContextProps {
    account: string;
    pageResolution: string;
}
export declare const useMainWrapperContext: () => MainContextProps | null;
export declare const MainWrapper: FC<{
    account: string;
}>;
export {};
