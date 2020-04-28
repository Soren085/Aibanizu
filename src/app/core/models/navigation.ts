export interface Navigation {
  title: string;
  route: string;
  iconAsset: string;
  icon?: string;
  hasChild?: boolean;
  children?: Navigation[];
  modelIcon: boolean;
}
