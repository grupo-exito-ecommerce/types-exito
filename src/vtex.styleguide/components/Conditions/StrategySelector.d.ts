import React from 'react';
import { Labels, Operator } from "./typings";
declare type Props = {
    isRtl?: boolean;
    labels: Pick<Labels, 'headerPrefix' | 'headerSufix' | 'operatorAll' | 'operatorAny'>;
    onChangeOperator: (operator: Props['operator']) => void;
    operator: Operator;
};
declare const StrategySelector: React.FC<Props>;
export default StrategySelector;
