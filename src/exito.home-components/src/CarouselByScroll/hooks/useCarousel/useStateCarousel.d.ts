/// <reference types="react" />
import { typeOfScroll } from '../../../shared';
interface IUseStateCarouselProps {
    itemsPerRow: number;
    scroll: typeOfScroll;
}
export declare const useStateCarousel: (props: IUseStateCarouselProps) => {
    currentPosition: number;
    setCurrentPosition: import("react").Dispatch<import("react").SetStateAction<number>>;
    typeScroll: typeOfScroll;
    setTypeOfScroll: import("react").Dispatch<import("react").SetStateAction<typeOfScroll>>;
    itemsToShow: number;
    setItemsToShow: import("react").Dispatch<import("react").SetStateAction<number>>;
    updateTypeScrollToUse: () => typeOfScroll;
    getTypeOfScroll: (numberOfRemaining: number) => typeOfScroll;
};
export {};
