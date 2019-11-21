import { ReactElement } from 'react';
export interface AttacmentPriceProps {
    logo: string;
    name: string;
    description: ReactElement | string;
    action: string;
    component?: ReactElement | null;
    componentModal?: ReactElement | null;
    width?: number | null;
}
declare const AttachmentPrice: (props: AttacmentPriceProps) => JSX.Element;
export default AttachmentPrice;
