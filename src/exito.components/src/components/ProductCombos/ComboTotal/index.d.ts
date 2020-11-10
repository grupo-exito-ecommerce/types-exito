/// <reference types="react" />
import { ApolloClient } from 'apollo-client';
interface ComboTotalProps {
    selectedItem: any;
    productOne: ISelectedItemVtex;
    productTwo?: ISelectedItemVtex;
    client: ApolloClient<any>;
    sellerId: string;
    comboInfoPUM: any;
}
declare const ComboTotal: (props: ComboTotalProps) => JSX.Element;
export default ComboTotal;
