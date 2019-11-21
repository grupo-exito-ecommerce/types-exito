export interface ISetMaterialProps {
    width: string;
    callFrom?: string;
}
export declare const contains: (word: any, list: any) => boolean;
export declare const setWidthMaterial: (callFrom?: string | undefined) => ISetMaterialProps;
/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export declare function useWidth(props?: ISetMaterialProps): string;
