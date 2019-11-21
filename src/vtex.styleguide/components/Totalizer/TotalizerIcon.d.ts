export default TotalizerIcon;
declare class TotalizerIcon extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace TotalizerIcon {
    export namespace propTypes {
        export const item: PropTypes.Validator<PropTypes.InferProps<{
            icon: PropTypes.Validator<PropTypes.ReactNodeLike>;
            iconBackgroundColor: PropTypes.Requireable<string>;
        }>>;
    }
}
import React from "react";
import PropTypes from "prop-types";
