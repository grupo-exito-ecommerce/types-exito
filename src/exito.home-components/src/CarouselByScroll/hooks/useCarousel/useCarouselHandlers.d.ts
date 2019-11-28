/// <reference types="react" />
import { IRemaining, typeOfScroll } from '../../../shared';
interface IUseCarouselHandlersProps {
    ref: React.RefObject<HTMLDivElement>;
    itemsPerRow: number;
    getFinalWidthToUse(): number;
    widthOfTheContent: number;
    itemRemaining: number;
    widthElement: number;
    numberOfElements: number;
    scroll: typeOfScroll;
    itemsToShow: number;
    isMobile: boolean;
    currentPosition: number;
    getTypeOfScroll: (numberOfRemaining: number) => typeOfScroll;
    numberOfItemToRemaining: number;
    setNumberOfItemToRemaining: React.Dispatch<React.SetStateAction<number>>;
    getItemRemaining(): IRemaining;
    setItemsToShow: React.Dispatch<React.SetStateAction<number>>;
    setCurrentPosition: React.Dispatch<React.SetStateAction<number>>;
    updateTypeScrollToUse: () => typeOfScroll;
    scrollOnWeb: boolean;
    parentRef: React.RefObject<HTMLDivElement>;
}
export declare function useCarouselHandlers(props: IUseCarouselHandlersProps): {
    showLeftArrow: boolean;
    setShowLeftArrow: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    showRightArrow: boolean;
    setShowRightArrow: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    viewRightArrow: () => void;
    getLeftToScroll: (typeScrollToUse: typeOfScroll, positionToUse?: number | undefined) => number;
    getRightToScroll: (typeScrollToUse: typeOfScroll, positionToUse?: number | undefined) => number;
    getLeftItemsToShow: (typeScrollToUse: typeOfScroll) => number;
    getRightItemsToShow: (typeScrollToUse: typeOfScroll) => number;
    goToPosition: (position: number) => void;
    leftScroll: () => void;
    rightScroll: () => void;
};
export {};
