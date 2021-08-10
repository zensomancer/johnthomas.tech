import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl"  px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
       
        <SocialMediaLinks />
      </Stack>
     
    </Stack>
  </Box>
)
