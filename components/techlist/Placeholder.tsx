import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Placeholder = (props: any) => (
  <Box
    bg={useColorModeValue('gray.50', 'gray.700')}
    width="full"
    height="32"
    rounded="xl"
   color="black"
  >
    {props.text}
    </Box>

)
