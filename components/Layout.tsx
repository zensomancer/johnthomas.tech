import { Badge, Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { NavBar } from './nav/NavBar'

export const Layout = (props: any) => {
  return (
    <Box bgImage="/bg.jpg" minH="100vh" h="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {props.children}
    </Box>
  )
}