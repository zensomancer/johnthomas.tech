import { Box, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'

export const NavBar = () => {
  return (
    <Box minH="640px">
      <Box as="header" bg="none" position="relative" zIndex="10">
        <Box as="nav" aria-label="Main navigation" maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
          
          <NavContent.Mobile display={{ base: 'flex', lg: 'none' }} />
          <NavContent.Desktop display={{ base: 'none', lg: 'flex' }} />
        </Box>
      </Box>
    </Box>
  )
}
