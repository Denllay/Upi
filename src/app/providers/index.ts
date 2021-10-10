import compose from 'compose-function';
import { withMui } from './with-mui';

import { withRouter } from './with-router';

export const withProviders = compose(withRouter, withMui);
