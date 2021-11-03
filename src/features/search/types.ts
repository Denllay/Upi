export type SortCategoryList =
  | 'Best match'
  | 'Most stars'
  | 'Fewest stars'
  | 'Most forks'
  | 'Fewest forks'
  | 'Recently updated'
  | 'Least update';

export interface SortCategory {
  oParam: 'asc' | 'desc';
  sParam: 'star' | 'forks' | 'updated' | '';
  name: SortCategoryList;
}
