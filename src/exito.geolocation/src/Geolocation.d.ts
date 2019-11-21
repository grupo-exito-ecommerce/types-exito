import { FC } from 'react';
import './global.css';
interface GeolocationContextProps {
    open: boolean;
    setOpen: (open: boolean, product?: any) => void;
    refetch: () => Promise<any>;
}
export declare const useGeolocation: () => GeolocationContextProps | null;
interface GeolocationProps {
    graphqlQueryRefetch?: () => Promise<any>;
}
export declare const Geolocation: FC<GeolocationProps>;
export {};
