import React from 'react';
import { ConsumerProps, ProviderProps } from './model';
declare const FlowConsumer: React.ExoticComponent<React.ConsumerProps<ConsumerProps | null>>;
declare const Flow: React.FunctionComponent<ProviderProps>;
declare const useFlowContext: () => ConsumerProps | null;
export { Flow, FlowConsumer, useFlowContext };
