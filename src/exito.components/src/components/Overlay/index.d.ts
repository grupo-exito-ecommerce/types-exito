import { FC, ReactElement } from 'react';
export interface OverlayWrapperProps {
    showOverlay: (message?: string, image?: any, close?: boolean) => void;
    hiddenOverlay: () => void;
    setOverlay: (Element: ReactElement) => void;
    setMessage: (message: string) => void;
}
export declare const useOverlayWrapper: () => OverlayWrapperProps | null;
declare const OverlayWrapper: FC;
export default OverlayWrapper;
