/// <reference types="react" />
export declare const useClickOutside: (ref: import("react").RefObject<HTMLElement>, onClickOutside: (e: Event) => any) => void;
export declare const useArrowNavigation: (ref: import("react").RefObject<HTMLElement>, optionsLength: number, initialSelectedOptionIndex: number) => [number, (index: number) => void];
