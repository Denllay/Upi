export interface RouteComponent {
    component: React.FC;
    exact: boolean;
    path: string;
}

export interface RoutesConfig extends RouteComponent {
    key: string;
    isPrivate?: boolean;
    isGlobal?: boolean;
    routes?: RoutesConfig[];
}
