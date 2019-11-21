declare type Map = {
    [key: string]: any;
};
export declare const useForm: (callback: () => void, validate: (values: Map) => Map) => {
    handleChange: (event: any) => void;
    handleForcedChange: (event: {
        name: string;
        value: any;
    }) => void;
    handleSubmit: (event: any) => void;
    resetForm: () => void;
    values: {};
    errors: {};
};
export {};
