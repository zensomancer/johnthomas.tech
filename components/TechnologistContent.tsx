import { Badge, Box, Button, Heading, Stack, Text, useColorModeValue, Center, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaPlus} from 'react-icons/fa'
import { TechList } from './techlist/TechList'

export const TechnologistContent = () => {
  return (
    <Box as="section">
      <Box
        maxW="5xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '10' }}
        textAlign="center"
        bg="blackAlpha.700"
        rounded="3xl"
      >
        <Heading
        color='gray.300'
          my="2"
          as="h2"
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
        JT
          <Box
            as="mark"
            bg="unset"
            color='green.300'
            whiteSpace="nowrap"
         
          >
           HACKER
          </Box>
        </Heading> 

      <TechList/>
     
      </Box>
    </Box>
  )
}