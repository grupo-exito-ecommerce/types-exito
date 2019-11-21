import { LineProps } from 'recharts';
export declare const colors: string[];
declare type DefaultLineProps = Pick<LineProps, 'type' | 'strokeWidth' | 'dot'>;
export declare const defaultProps: DefaultLineProps;
export declare const tooltipProps: {
    cursor: boolean;
    labelStyle: {
        color: string;
    };
};
export {};
