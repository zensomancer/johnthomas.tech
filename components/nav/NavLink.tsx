import { chakra, HTMLChakraProps, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface NavLinkProps extends HTMLChakraProps<'a'> {
  active?: boolean
}

const DesktopNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      ref={ref}
      display="inline-block"
      px="4"
      py="6"
      fontSize="xl"
      fontWeight="black"
      letterSpacing="wider"
      
      aria-current={active ? 'page' : undefined}
      color="gray.50"
      transition="all 0.2s"
      {...rest}
      _hover={{ color: 'gray.500' }}
      _active={{ color: 'gray.600' }}
      _activeLink={{
        color: 'purple.600',
        fontWeight: 'bold',
      }}
    />
  )
})
DesktopNavLink.displayName = 'DesktopNavLink'

export const MobileNavLink = (props: NavLinkProps) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      aria-current={active ? 'page' : undefined}
      w="full"
      
      display="flex"
      alignItems="center"
      height="14"
      fontWeight="semibold"
      borderBottomWidth="1px"
      {...rest}
    />
  )
}

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}
