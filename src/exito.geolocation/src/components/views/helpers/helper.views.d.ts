interface Props {
    email: string;
    saveData: (data: any) => void;
    goToNextView: (next: number) => void;
    mutate: any;
    profileData: any;
}
export declare const updateProfile: (props: Props) => Promise<void>;
export {};
