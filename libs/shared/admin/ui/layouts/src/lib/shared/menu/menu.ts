import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Navegación',
    isTitle: true
  },
  {
    label: 'Tablero',
    icon: 'home',
    link: '/'
    // badge: {
    //   variant: 'success',
    //   text: '1'
    // }
  },
  {
    label: 'Administración',
    isTitle: true
  },
  {
    label: 'Usuarios',
    icon: 'user',
    link: '/user'
  },
  // {
  //   label: 'Roles y Permisos',
  //   icon: 'users',
  //   link: '/'
  // },
  {
    label: 'Categorias',
    icon: 'file-text',
    link: '/category'
  }
];
