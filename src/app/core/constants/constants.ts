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
    iconAsset: 'assets/icon-svg/electric-guitar.svg',
    icon: 'electric-guitar',
    hasChild: true,
    children: [
      {
        title: 'Anatomy',
        route: 'guitar/anatomy',
        iconAsset: 'assets/icon-svg/neuron.svg',
        icon: 'neuron',
      },
      {
        title: 'Brands',
        route: 'guitar/brands',
        iconAsset: 'assets/icon-svg/guitar-shop.svg',
        icon: 'guitar-shop',
      },
      {
        title: 'Techniques',
        route: 'guitar/techniques',
        iconAsset: 'assets/icon-svg/neuron.svg',
        icon: 'neuron',
      },
    ]
  },

];
