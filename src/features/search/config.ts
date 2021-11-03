import { SortCategory } from './types';

export const pathCategorySearchConfig: SortCategory[] = [
  {
    name: 'Best match',
    sParam: '',
    oParam: 'desc',
  },
  {
    name: 'Fewest forks',
    oParam: 'asc',
    sParam: 'forks',
  },
  {
    name: 'Most forks',
    oParam: 'desc',
    sParam: 'forks',
  },
  {
    name: 'Fewest stars',
    oParam: 'asc',
    sParam: 'star',
  },
  {
    name: 'Most stars',
    oParam: 'desc',
    sParam: 'star',
  },
  {
    name: 'Least update',
    oParam: 'asc',
    sParam: 'updated',
  },
  {
    name: 'Recently updated',
    oParam: 'desc',
    sParam: 'updated',
  },
];
