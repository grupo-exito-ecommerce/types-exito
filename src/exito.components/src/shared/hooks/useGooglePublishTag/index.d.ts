export interface Window {
    dataLayer: any;
    googletag: any;
}
export declare var window: Window;
export declare const useGooglePublishTag: (props: any) => {
    callessionPromiseFromWindow: () => Promise<void>;
};
