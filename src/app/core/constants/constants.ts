import { DrawerStatus } from '../models/drawer-status';
import { Navigation } from '../models/navigation';

export class Assets {
  public static logo = 'assets/img/dark-theme-logo-yellow-no-bg-reverese.png';
}

export const DrawerState: DrawerStatus = {
  Open: true,
  Close: false,
};

export const Navigations: Navigation[] = [
  {
    title: 'Impression',
    route: 'impression',
    iconAsset: 'assets/icon-svg/impression.svg',
    icon: 'impression',
    hasChild: false
  },
  {
    title: 'Guitar',
    route: 'guitar',
    iconAsset: 'assets/icon-svg/impression.svg',
    icon: 'impression',
    hasChild: true,
    children: [
      {
        title: 'Anatomy',
        route: 'guitar/anatomy',
        iconAsset: '',
      },
      {
        title: 'Genres',
        route: 'guitar/genres',
        iconAsset: '',
      }
    ]
  },

];
