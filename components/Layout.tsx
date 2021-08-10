import { Badge, Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { NavBar } from './nav/NavBar'

export const Layout = (props: any) => {
  return (
    <Box bg="gray.900"   color="gray.100"  bgPos="center" minH="100vh" h="100%" display="flex" flexDirection="column" >
      <NavBar/>
      {props.children}
    </Box>
  )
}