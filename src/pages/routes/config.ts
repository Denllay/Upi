import { lazy } from 'react';

import { RouteParamsEnum } from '@shared/config/router';

import { RoutesConfig } from './types';

const NotFound = lazy(() => import('../notFound'));

const Home = lazy(() => import('../home'));
const Login = lazy(() => import('../auth/login'));
const User = lazy(() => import('../user'));
const Repository = lazy(() => import('../repository'));

// ** route "user" must be last because he overlaps other routes

export const routesConfig: RoutesConfig[] = [
    {
        component: Login,
        exact: true,
        isPrivate: false,
        key: 'login',
        path: '/login',
    },
    {
        component: Home,
        exact: true,
        isPrivate: false,
        key: 'home',
        path: '/home',
    },
    {
        component: NotFound,
        exact: true,
        isPrivate: true,
        key: 'notFound',
        path: '/404',
    },

    {
        component: Repository,
        exact: false,
        isGlobal: true,
        key: 'repository',
        path: `/:${RouteParamsEnum.USERNAME}/:${RouteParamsEnum.REPOSITORY}/:${RouteParamsEnum.BRANCH}(tree/[^/.]+)?/:${RouteParamsEnum.PATH}(.+)?`,
    },
    {
        component: User,
        exact: true,
        isGlobal: true,
        key: 'user',
        path: `/:${RouteParamsEnum.USERNAME}`,
    },
];
