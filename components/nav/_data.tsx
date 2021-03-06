import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export interface Link {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  { label: 'HOME', href: '/' },
  { label: 'BLOG', href: '#' },
  { label: 'FREELANCE', href: '/freelance' },
  { label: 'ABOUT', href: '#' },
]
