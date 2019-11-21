export default TotalizerValue;
declare class TotalizerValue extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace TotalizerValue {
    export namespace propTypes {
        export const item: PropTypes.Requireable<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            value: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            iconBackgroundColor: PropTypes.Requireable<string>;
            icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            isLoading: PropTypes.Requireable<boolean>;
        }>>;
    }
}
import React from "react";
import PropTypes from "prop-types";
