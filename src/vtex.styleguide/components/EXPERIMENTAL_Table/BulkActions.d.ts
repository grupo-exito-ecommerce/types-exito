import React, { FC } from 'react';
import useTableBulkActions from './hooks/useTableBulkActions';
import { MenuAction } from './Toolbar/PopoverMenu';
declare const BulkActions: FC<BulkActionsProps>;
export declare type BulkActionsProps = {
    texts: {
        secondaryActionsLabel: string;
        rowsSelected: (qty: number) => React.ReactNode;
        selectAll: string;
        allRowsSelected: (element: React.ReactElement) => React.ReactNode;
    };
    totalItems: number;
    onChange: Function;
    main: MenuAction;
    others: Array<MenuAction>;
    data: ReturnType<typeof useTableBulkActions>;
};
export default BulkActions;
