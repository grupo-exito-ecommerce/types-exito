/// <reference types="react" />
import { ApolloClient } from 'apollo-client';
interface ComboProps {
    selectedItem: ISelectedItemVtex;
    productOne: ISelectedItemVtex;
    productTwo?: ISelectedItemVtex;
    client: ApolloClient<any>;
    sellerId: string;
    numeroTotalCombos: number;
    contCombos: number;
}
declare const Combo: (props: ComboProps) => JSX.Element;
export default Combo;
