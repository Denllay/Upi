import { Category } from './types';

export const searchCategoryConfig: Category[] = [
  {
    name: 'Repositories',
    type: 'repositories',
  },

  {
    name: 'Commits',
    type: 'commits',
  },

  {
    name: 'Code',
    type: 'code',
    requirements: {
      type: 'OR',
      requirementsData: ['user', 'repo'],
    },
  },

  {
    type: 'users',
    name: 'Users',
  },
];
