export interface Route {
  Component: React.FC;
  isPrivate: boolean;
  exact: boolean;
  path: string;
  key: string;
}
