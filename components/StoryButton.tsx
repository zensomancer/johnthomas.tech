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
import { StoryList } from './techlist/StoryList'
export const StoryButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
  
          <Button
          
            size="lg"
            h="16"
            px="10"
            colorScheme="green"
            bg="none"
            border="4px"
            fontWeight="black"
            fontSize="xl"
            flex={{ md: '1' }}
            onClick={onOpen}
          >
            STORYTELLER
          </Button>


      <Modal onClose={onClose} isOpen={isOpen} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent bg="blackAlpha.800" rounded="3xl">
     
          <ModalCloseButton color="gray.50"/>
          <ModalBody mb="10">
            <Center>
            <Heading mt="10" color="white">JT the Storyteller</Heading>
            </Center>
           <StoryList/>
          </ModalBody>
       
        </ModalContent>
      </Modal>

        </>
  )
}