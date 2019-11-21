export interface ViewConfig {
    next: string | string[] | null;
    component: Promise<any>;
    props?: any;
    data?: any;
    transition?: boolean;
}
export interface ListView {
    [key: string]: ViewConfig;
}
export interface FlowConfig {
    activeView: string;
    views: ListView;
}
export interface ConsumerProps {
    views: ListView;
    prevActiveView: string;
    activeView: string;
    viewsHistory: string[];
    globalData: any;
    productContext: any;
    goToView: (id: string) => void;
    backInHistory: () => void;
    goToNextView: (branch?: number) => void;
    saveData: (data: any) => void;
    handleCloseFlow: (force?: boolean) => void;
    goToHome: () => void;
    refresh: () => Promise<any>;
    saveGlobalData: (data: any) => void;
    existsViewsHistory: () => boolean;
}
export interface ProviderProps {
    config: FlowConfig;
    handleCloseFlow: (force?: boolean) => void;
    refresh: () => Promise<any>;
    productContext: any;
    persistence?: {
        type: 'memory' | 'session';
        keyStorage: string;
    };
}
