/// <reference types="react" />
import { PropsStepper } from '.';
export interface StepperModalProps {
    config: PropsStepper;
    handleClose: () => void;
    handleOpen: () => void;
    handleBlockDialog: () => void;
    open: boolean;
}
export default function StepperModal(props: StepperModalProps): JSX.Element;
