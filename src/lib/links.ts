import withBase from './withBase';

export const EMAIL = 'imamhossainroni.de@gmail.com';

// Pages of the site, in menu order. `id` matches each page's sideBarActiveItemID.
export const pages = [
  { id: 'home', label: 'Home', dir: '~', href: withBase('/') },
  { id: 'projects', label: 'Projects', dir: '~/projects', href: withBase('/projects') },
  { id: 'cv', label: 'Resume', dir: '~/resume', href: withBase('/cv') },
  { id: 'blog', label: 'Writing', dir: '~/writing', href: withBase('/blog') },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/ImamHossainRoni' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/imamhossainroni' },
  { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/6342245/imam-hossain-roni' },
  { label: 'Hashnode archive', href: 'https://imamhossainroni.hashnode.dev/' },
];
