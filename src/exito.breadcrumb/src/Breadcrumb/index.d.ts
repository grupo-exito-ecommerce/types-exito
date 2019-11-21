import { ReactElement } from 'react';
interface BreadCrumbProps {
    children: ReactElement[];
}
declare const Breadcrumb: (props: BreadCrumbProps) => ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | null;
export default Breadcrumb;
