import { ReactComponentElement, FC } from 'react';
export interface ModalMKPIProps {
    state: boolean;
    handleClose: () => void;
    title: ReactComponentElement<any>;
}
declare const ModalMKPI: FC<ModalMKPIProps>;
export default ModalMKPI;
