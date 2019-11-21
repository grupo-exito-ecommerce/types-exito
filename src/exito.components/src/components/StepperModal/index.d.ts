/// <reference types="react" />
import { StepperItemsModel } from './StepperItems';
export interface PropsStepper {
    stepperItems: StepperItemsModel[];
    title: string;
    titleSecondString: string;
    fullWidth: boolean;
    closeText: string;
    viewMoreText: string;
    viewMoreLink: string;
    maxWidth: any;
    stepperDotsVariant: string;
    showComponent: boolean;
}
declare function StepperModalContent(props: PropsStepper): JSX.Element | null;
declare namespace StepperModalContent {
    var defaultProps: PropsStepper;
    var getSchema: () => {
        title: string;
        description: string;
        type: string;
        default: PropsStepper;
        properties: {
            showComponent: {
                title: string;
                type: string;
            };
            title: {
                title: string;
                type: string;
            };
            titleSecondString: {
                title: string;
                type: string;
            };
            stepperItems: {
                title: string;
                type: string;
                items: {
                    title: string;
                    type: string;
                    properties: {
                        label: {
                            title: string;
                            type: string;
                        };
                        imgPath: {
                            title: string;
                            type: string;
                            widget: {
                                'ui:widget': string;
                            };
                        };
                        imgMobilePath: {
                            title: string;
                            type: string;
                            widget: {
                                'ui:widget': string;
                            };
                        };
                    };
                };
            };
            fullWidth: {
                title: string;
                type: string;
            };
            stepperDotsVariant: {
                title: string;
                type: string;
                enum: string[];
            };
            maxWidth: {
                title: string;
                type: string;
                enum: string[];
            };
            closeText: {
                title: string;
                type: string;
            };
            viewMoreText: {
                title: string;
                type: string;
            };
            viewMoreLink: {
                title: string;
                type: string;
                format: string;
            };
        };
    };
}
export default StepperModalContent;
