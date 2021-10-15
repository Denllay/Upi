import { lazy } from 'react';
import { Route } from './types';

const NotFound = lazy(() => import('../notFound'));
const Home = lazy(() => import('../home'));
const Login = lazy(() => import('../auth/login'));
const User = lazy(() => import('../user'));
const Repository = lazy(() => import('../repository'));

export const routesConfig: Route[] = [
  {
    Component: Login,
    exact: true,
    isPrivate: false,
    key: 'login',
    path: '/login',
  },
  {
    Component: Home,
    exact: true,
    isPrivate: false,
    key: 'home',
    path: '/home',
  },
  {
    Component: NotFound,
    exact: true,
    isPrivate: true,
    key: 'notFound',
    path: '/404',
  },
  {
    Component: User,
    exact: true,
    isPrivate: true,
    key: 'user',
    path: '/user/:nick',
  },

  { Component: Repository, exact: true, isPrivate: true, key: 'repository', path: '/user/:nick/:repository' },
];
