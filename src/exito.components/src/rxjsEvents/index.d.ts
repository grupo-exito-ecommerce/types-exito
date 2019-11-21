import { Observable } from 'rxjs';
export interface SendEventProps {
    [key: string]: any;
    name: string;
    data?: any;
}
export declare type CustomFilter = (value: any, index?: number) => boolean;
declare const exitoEvents: {
    sendEvent: (info: SendEventProps, key?: string | undefined) => void;
    getEvent: (name?: string | undefined, customFilter?: CustomFilter | undefined) => Observable<SendEventProps>;
};
export default exitoEvents;
