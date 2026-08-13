import { ui } from './ui'

// site config
export const utm_source = 'mingming-portfolio'

// navigation config
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: ui.nav.home,
    href: '/'
  },
  {
    name: ui.nav.about,
    href: '/about'
  },
  {
    name: ui.nav.projects,
    href: '/projects'
  },
  {
    name: ui.nav.blogs,
    href: '/blogs'
  }
]

export const navItems: Array<NavItemType> = [
  {
    name: ui.nav.home,
    href: '/'
  },
  {
    name: ui.nav.about,
    href: '/about'
  },
  {
    name: ui.nav.projects,
    href: '/projects'
  },
  {
    name: ui.nav.blogs,
    href: '/blogs'
  }
]
