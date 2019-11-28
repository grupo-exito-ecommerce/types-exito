/// <reference types="react" />
import { ItemStyleProps } from '../../../shared';
interface IUseCarouselConfig {
    pageWidth: string;
    scrollOnWeb: boolean;
    itemsPerRow: number;
    numberOfElements: number;
    sideSize: number;
    showSides: boolean;
    isMobile: boolean;
    scrollOnDevice: boolean;
}
/**
 * Hook para manejar el tamaño del container, los items y los estilos de los items
 * @param props
 */
export declare const useCarouselConfiguration: (props: IUseCarouselConfig) => {
    getItemStyle: () => ItemStyleProps;
    getWidthOfTheItems: () => number;
    getWidthOfTheContainer: () => number;
    widthOfTheContent: number;
    itemStyles: ItemStyleProps;
    widthContainer: number;
    setWidthContainer: import("react").Dispatch<import("react").SetStateAction<number>>;
    setWidthElement: import("react").Dispatch<import("react").SetStateAction<number>>;
    setItemStyles: import("react").Dispatch<import("react").SetStateAction<ItemStyleProps>>;
    setWidthOfTheContent: import("react").Dispatch<import("react").SetStateAction<number>>;
    getFinalWidthToUse: () => number;
    widthElement: number;
};
export {};
