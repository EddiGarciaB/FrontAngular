export interface MenuItem {
  id: string;
  title: string;
  activeSubMenu: number;
  headerItem: HeaderItem;
  items: MenuItemItem[];
  subRoles: string[]
}

interface MenuItemItem {
  name: string;
  role: string,
  route: string;
}

export interface HeaderItem{
  num: number;
  tooltipName: string;
  icon: string;
}
