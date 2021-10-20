import { RouteParamsEnum } from '@shared/config/router';
import { lazy } from 'react';
import { Route } from './types';

const NotFound = lazy(() => import('../notFound'));
const Home = lazy(() => import('../home'));
const Login = lazy(() => import('../auth/login'));
const User = lazy(() => import('../user'));
const Repository = lazy(() => import('../repository'));

export const routesConfig: Route[] = [
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
    component: User,
    exact: true,
    multy: true,
    key: 'user',
    path: `/:${RouteParamsEnum.USERNAME}`,
  },

  {
    component: Repository,
    exact: false,
    multy: true,
    key: 'repository',
    path: `/:${RouteParamsEnum.USERNAME}/:${RouteParamsEnum.REPOSITORY}/:${RouteParamsEnum.BRANCH}(tree/[^/.]+)?/:${RouteParamsEnum.PATH}(.+)?`,
  },
];
