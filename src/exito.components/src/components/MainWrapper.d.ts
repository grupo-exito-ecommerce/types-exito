import { FC } from 'react';
import { WithApolloClient } from 'react-apollo';
import { AdditionalAlliesInfoFormatted, AdditionalFlagsInfoFormatted } from '../shared';
export interface MainContextProps {
    account: string;
    pageResolution: string;
    additionalAlliesInfo: AdditionalAlliesInfoFormatted[];
    additionalFlagsInfo: AdditionalFlagsInfoFormatted[];
    clusters?: string;
}
export declare const useMainWrapperContext: () => MainContextProps | null;
export declare const MainWrapper: FC<WithApolloClient<{
    account: string;
}>>;
declare const _default: import("react").ComponentClass<{
    account: string;
}, any>;
export default _default;
