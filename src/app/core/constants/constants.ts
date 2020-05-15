import { DrawerStatus } from '../models/drawer-status';
import { Navigation } from '../models/navigation';
import { Playlist } from '../models/playlist';
import { Musician } from '../models/musician';

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
    modelIcon: false,
    hasChild: false
  },
  {
    title: 'Guitar',
    route: 'guitar',
    iconAsset: 'assets/icon-svg/electric-guitar.svg',
    icon: 'electric-guitar',
    modelIcon: false,
    hasChild: true,
    children: [
      {
        title: 'Anatomy',
        route: 'anatomy',
        iconAsset: 'assets/icon-svg/neuron.svg',
        icon: 'neuron',
        modelIcon: false,
      },
      {
        title: 'Brands',
        route: 'brands',
        iconAsset: 'assets/icon-svg/guitar-shop.svg',
        icon: 'guitar-shop',
        modelIcon: false,
      },
      {
        title: 'Techniques',
        route: 'techniques',
        iconAsset: 'assets/icon-svg/guitar-tech.svg',
        icon: 'guitar-tech',
        modelIcon: false,
      },
    ]
  },
  {
    title: 'Musicians',
    route: 'musicians',
    iconAsset: 'assets/icon-svg/freddie.svg',
    icon: 'freddie',
    modelIcon: true,
    hasChild: false
  },
  {
    title: 'Author',
    route: 'author',
    iconAsset: 'assets/icon-svg/author.svg',
    icon: 'author',
    modelIcon: true,
    hasChild: false
  },
];

export const PlayLists: Playlist[] = [
  {
    url: 'https://open.spotify.com/embed/playlist/3CcarFlp60sHD4W3OraScH',
    title: 'Hard Rock'
  },
  {
    url: 'https://open.spotify.com/embed/playlist/3CcarFlp60sHD4W3OraScH',
    title: 'Hard Rock'
  },
  {
    url: 'https://open.spotify.com/embed/playlist/3CcarFlp60sHD4W3OraScH',
    title: 'Hard Rock'
  },
  {
    url: 'https://open.spotify.com/embed/playlist/3CcarFlp60sHD4W3OraScH',
    title: 'Hard Rock'
  },
  {
    url: 'https://open.spotify.com/embed/playlist/3CcarFlp60sHD4W3OraScH',
    title: 'Hard Rock'
  },

];

export const Musicians: Musician[] = [
  {
    name: 'Vai',
    image: 'assets/img/steve-vai.jpg'
  },
  {
    name: 'Joe Sat',
    image: 'assets/img/joe-sat.jpg'
  },
  {
    name: 'Dio',
    image: 'assets/img/dio.jpg'
  },

];
