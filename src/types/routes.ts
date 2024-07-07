import { RouteComponent } from 'vue-router';

interface ChildrenRoute {
    path: string;
    name?: string;
    component: RouteComponent;
}

export default interface Route {
    path: string;
    name?: string;
    component: RouteComponent;
    children?: ChildrenRoute[];
}
