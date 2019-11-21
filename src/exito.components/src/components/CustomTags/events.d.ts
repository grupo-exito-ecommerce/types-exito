import { Observable } from 'rxjs';
export interface CustomTagEvent {
    [key: string]: any;
    name: string;
    script?: string;
    data?: any;
}
declare const _default: {
    run: (event: CustomTagEvent) => void;
    get: () => Observable<CustomTagEvent>;
};
export default _default;
