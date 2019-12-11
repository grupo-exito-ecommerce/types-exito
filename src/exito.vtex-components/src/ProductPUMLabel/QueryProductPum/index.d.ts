import React from 'react';
import { ProductPumLabelProps } from '../../shared';
export declare const processPum: (pum: any, comboPum: any, handleOpen: any) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
declare const QueryProductPum: ({ skuId, sellerId, handleOpen, client }: ProductPumLabelProps) => JSX.Element;
export default QueryProductPum;
