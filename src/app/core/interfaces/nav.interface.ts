/**
 * Navigation item interface
 * @interface INavItem
 */
export interface INavItem {
  path: string;
  label: {
    my: string;
    en: string;
    th: string;
  };
  exact: boolean;
}
