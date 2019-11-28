/// <reference types="react" />
import { IRemaining, typeOfScroll } from '../../../shared';
interface IUseRemaining {
    itemsToShow: number;
    itemsPerRow: number;
    numberOfElements: number;
    getTypeOfScroll(numberOfRemaining: number): typeOfScroll;
    scroll: typeOfScroll;
}
export declare const useRemaining: (props: IUseRemaining) => {
    itemRemaining: number;
    setItemRemaining: import("react").Dispatch<import("react").SetStateAction<number>>;
    numberOfItemToRemaining: number;
    setNumberOfItemToRemaining: import("react").Dispatch<import("react").SetStateAction<number>>;
    getItemRemaining: () => IRemaining;
};
export {};
