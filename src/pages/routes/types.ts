export interface Route {
  component: React.FC;
  exact: boolean;
  path: string;
  key: string;
  isPrivate?: boolean;
  multy?: boolean;
}
