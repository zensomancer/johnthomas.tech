import { Badge, Box, Button, Heading, Stack, Text, useColorModeValue, Center, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaPlus} from 'react-icons/fa'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
import { TechButton } from './TechButton'
import { StoryButton } from './StoryButton'
export const Hero = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
         JOHN {' '}
          <Box
            as="mark"
            bg="unset"
            color='green.300'
            whiteSpace="nowrap"
         
          >
           'JT'
          </Box>
         {' '} THOMAS
        </Heading> 
        <Stack
          direction={{ base: 'column', sm: 'row' }}
       
          justify="center"
          spacing={{ base: '3', md: '3' }}
          maxW="lg"
          mx="auto"
        >
        <Button as="a" href="https://github.com/zensomancer/" target="_blank">
        <FaGithub size="30px"/>
        </Button>
        <Button as="a" href="https://linkedin.com/in/johnthomastech/" target="_blank">
        <FaLinkedin size="30px"/>
        </Button>
        <Button as="a" href="https://twitter.com/zensomancer" target="_blank">
        <FaTwitter size="30px"/>
        </Button>
        <Button as="a" href="mailto:jt@johnthomas.tech" target="_blank">
        <FaPaperPlane size="30px"/>
        </Button>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          mt="10"
          justify="center"
          spacing={{ base: '3', md: '5' }}
          maxW="lg"
          mx="auto"
        >
        <TechButton/>
            <Center>
          <FaPlus color="white" size="35px" />
          </Center>
         <StoryButton/>
          {/* <Button
            as="a"
            href="#"
            size="lg"
            h="16"
            px="10"
            colorScheme="green"
            bg="none"
            border="4px"
            fontWeight="black"
            fontSize="xl"
            flex={{ md: '1' }}
          >
            CHANGE.
          </Button> */}
        </Stack>
      </Box>
    </Box>
  )
}