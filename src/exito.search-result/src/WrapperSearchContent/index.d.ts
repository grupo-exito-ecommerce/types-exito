import { ReactElement } from 'react';
interface SearchContentProps {
    children: ReactElement[];
}
declare const WrapperSearchContent: (props: SearchContentProps) => ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | null;
export default WrapperSearchContent;
