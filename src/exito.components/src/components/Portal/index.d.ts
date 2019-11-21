import { Component } from 'react';
declare type PortalProps = {
    target: string;
};
declare class Portal extends Component<PortalProps> {
    private root;
    private element;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
}
export default Portal;
