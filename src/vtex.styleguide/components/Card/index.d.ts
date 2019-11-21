export default Card;
declare class Card extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Card {
    export namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
        export const noPadding: PropTypes.Requireable<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
