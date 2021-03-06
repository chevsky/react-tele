import React = require('react');
export declare type Lazy<T> = T | (() => T);
export interface PortalProps {
    id?: any;
    target?: Lazy<Target | Promise<Target>>;
    onClose?: () => any;
    children?: any;
}
export declare class Portal extends React.Component<PortalProps, {}> {
    constructor(props?: any);
    updateTarget(children: any): void;
    closed: boolean;
    close(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.DOMElement<any>;
}
export declare class Target extends React.Component<{
    id?: any;
}, {
    children: any;
}> {
    constructor(props?: any);
    portal: Portal;
    update(children: any, portal: Portal): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): React.DOMElement<any>;
    static Destinations: {
        [key: string]: Target;
    };
}
declare var _default: {
    port: typeof Portal;
    target: typeof Target;
};
export default _default;
