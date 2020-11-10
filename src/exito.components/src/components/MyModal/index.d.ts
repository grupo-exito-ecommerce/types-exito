import { FC } from 'react';
interface MyModalProps {
    nameIcon: string;
    sizeIcon: string;
    title: string;
    handleClose: () => void;
    open: boolean;
}
declare const MyModal: FC<MyModalProps>;
export default MyModal;
