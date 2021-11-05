import compose from 'compose-function';
import { withAuth } from './with-auth';
import { withMui } from './with-mui';
import { withQueryParam } from './with-query-param';
import { withRedux } from './with-redux';
import { withRouter } from './with-router';

export const withProviders = compose(withRedux, withRouter, withMui, withAuth, withQueryParam);
