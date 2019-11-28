import { ReactElement } from 'react';
interface GalleryProps {
    children: ReactElement[];
    products: IProductVtex[];
    mobileLayout: string;
    showFacets: any;
}
declare const GalleryWrapper: (props: GalleryProps) => JSX.Element | null;
export default GalleryWrapper;
