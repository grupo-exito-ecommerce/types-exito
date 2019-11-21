import React, { FC } from 'react';
declare const LineAction: FC<LineActionProps>;
export declare type LineActionObject = {
    label: string;
    renderLabel?: ({ rowData: unknow }: {
        rowData: any;
    }) => React.ReactNode;
    isDangerous: boolean;
    onClick: Function;
};
export declare type LineActionProps = {
    lineActions: Array<LineActionObject>;
    rowData: Object;
};
export default LineAction;
