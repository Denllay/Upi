import compose from 'compose-function';
import { withAuth } from './with-auth';
import { withMui } from './with-mui';
import { withRedux } from './with-redux';
import { withRouter } from './with-router';
import { withUserData } from './with-userData';

export const withProviders = compose(withRedux, withRouter, withMui, withUserData, withAuth);
