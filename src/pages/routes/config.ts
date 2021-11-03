import Search from '@pages/search';
import { RouteParamsEnum } from '@shared/config/router';
import { SearchCode } from '@widgets/search/code';
import { lazy } from 'react';
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
    component: Search as React.FC,
    exact: false,
    isGlobal: true,
    key: 'search',
    path: '/search',
    routes: [
      {
        component: SearchCode,
        exact: false,
        isGlobal: true,
        key: 'search_code',
        path: '/search([^.]+)?(&type=code)?',
      },
    ],
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
