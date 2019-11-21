/// <reference types="react" />
export interface StepperItemsModel {
    label: string;
    imgPath: string;
    imgMobilePath: string;
}
export declare const DEFAULT_STEPPER: StepperItemsModel[];
export default function StepperItems({ stepperItems, stepperDotsVariant }: {
    stepperDotsVariant: any;
    stepperItems: StepperItemsModel[];
}): JSX.Element;
