export default Toolbar;
declare class Toolbar extends React.PureComponent<any, any, any> {
    constructor(props: any);
    fieldsBtnRef: React.RefObject<any>;
    extraActionsBtnRef: React.RefObject<any>;
    densityBtnRef: React.RefObject<any>;
    state: {
        isFieldsBoxVisible: boolean;
        isDensityBoxVisible: boolean;
    };
    handleToggleBox: (boxKey: any) => void;
    handleClickOutside: (e: any) => void;
    calculateFieldsBoxHeight: () => number;
    calculateExtraActionsBoxHeight: () => number;
    handleInputSearchSubmit: (e: any) => void;
    render(): JSX.Element;
}
declare namespace Toolbar {
    export namespace defaultProps {
        export namespace actions {
            export namespace extraActions {
                const actions_1: any[];
                export { actions_1 as actions };
            }
        }
    }
    export namespace propTypes {
        const actions_2: PropTypes.Requireable<PropTypes.InferProps<{
            inputSearch: PropTypes.Requireable<PropTypes.InferProps<{
                onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
            }>>;
            density: PropTypes.Requireable<PropTypes.InferProps<{
                buttonLabel: PropTypes.Requireable<string>;
                lowOptionLabel: PropTypes.Requireable<string>;
                handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
                mediumOptionLabel: PropTypes.Requireable<string>;
                highOptionLabel: PropTypes.Requireable<string>;
                alignMenu: PropTypes.Requireable<string>;
            }>>;
            fields: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                showAllLabel: PropTypes.Requireable<string>;
                hideAllLabel: PropTypes.Requireable<string>;
                alignMenu: PropTypes.Requireable<string>;
            }>>;
            download: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
                isLoading: PropTypes.Requireable<boolean>;
                disabled: PropTypes.Requireable<boolean>;
            }>>;
            upload: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
                isLoading: PropTypes.Requireable<boolean>;
                disabled: PropTypes.Requireable<boolean>;
            }>>;
            extraActions: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Requireable<string>;
                actions: PropTypes.Requireable<PropTypes.InferProps<{
                    label: PropTypes.Requireable<string>;
                    handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
                }>[]>;
                alignMenu: PropTypes.Requireable<string>;
                isLoading: PropTypes.Requireable<boolean>;
            }>>;
            newLine: PropTypes.Requireable<PropTypes.InferProps<{
                label: PropTypes.Validator<string>;
                handleCallback: PropTypes.Validator<(...args: any[]) => any>;
                disabled: PropTypes.Requireable<boolean>;
                isLoading: PropTypes.Requireable<boolean>;
                actions: PropTypes.Requireable<PropTypes.InferProps<{
                    label: PropTypes.Requireable<string>;
                    handleCallback: PropTypes.Requireable<(...args: any[]) => any>;
                    toggle: PropTypes.Requireable<PropTypes.InferProps<{
                        checked: PropTypes.Requireable<boolean>;
                        semantic: PropTypes.Requireable<boolean>;
                    }>>;
                }>[]>;
            }>>;
        }>>;
        export { actions_2 as actions };
        export const schema: PropTypes.Validator<object>;
        export const hiddenFields: PropTypes.Requireable<any[]>;
        export const onToggleColumn: PropTypes.Requireable<(...args: any[]) => any>;
        export const onDeselectAllLines: PropTypes.Requireable<(...args: any[]) => any>;
        export const onHideAllColumns: PropTypes.Requireable<(...args: any[]) => any>;
        export const onShowAllColumns: PropTypes.Requireable<(...args: any[]) => any>;
        export const onToggleDensity: PropTypes.Requireable<(...args: any[]) => any>;
        export const selectedDensity: PropTypes.Requireable<string>;
        export const loading: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
