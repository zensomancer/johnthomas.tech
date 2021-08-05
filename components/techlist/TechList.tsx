import * as React from 'react'
import { FaLock, FaDiceD20, FaRing, FaCode, FaQuestion } from 'react-icons/fa'
import { Box, Icon, Text } from '@chakra-ui/react'
import { List } from './List'
import { ListItem } from './ListItem'
import { Placeholder } from './Placeholder'

export const TechList = () => {
  return (
    <Box as="section">
      <Box maxW="2xl" mx="auto" p={{ base: '4', md: '8' }}>
        <List spacing="12">
          <ListItem
            title="Information Security Analyst"
            subTitle="Michigan State University | 2021+"
            icon={<Icon as={FaLock} boxSize="6" />}
          color="green.50"
          fontSize="lg"
          // fontWeight="semibold"
          >
           As a member of the Governance, Risk, and Compliance team at MSU, I perform vendor risk assessments, consult on security concerns for internal projects, and work with academic and administrative unit IT teams to recommend and help implement security best practices.
          </ListItem>
          <ListItem
            title="Software Developer"
            subTitle="[Apparatus] by Wychroot | 2021+"
            icon={<Icon as={FaDiceD20} boxSize="6" />}
            color="green.50"
            fontSize="lg"
            fontWeight="semibold"
          >
          [Apparatus] is an in-development open source project designed to bootstrap commonly requested digital tools for tabletop roleplaying games. I founded Wychroot LLC to hold the [Apparatus] project and also serve as a business entity for any side-gigs I come across. Once I publish the respository publicy, I will link to it here.
          </ListItem>
          <ListItem
            title="Software Developer"
            subTitle="Blackroot Vale | 2021+ "
            icon={<Icon as={FaRing} boxSize="6" />}
            color="green.50"
            fontSize="lg"
            fontWeight="semibold"
          >
            Blackroot Vale is the first implementation of [Apparatus], and specifically targets THE ONE RING RPG by Free League Publishing. Look for a launch circa November 2021 around the same time THE ONE RING is released.
          </ListItem>
          <ListItem
            title="Freelance Software Developer"
            subTitle="A blast from the past | 2012 - 2021"
            icon={<Icon as={FaCode} boxSize="6" />}
            color="green.50"
            fontSize="lg"
            fontWeight="semibold"
          >
            I was a freelance software developer for almost a decade and have worked in game development, cybersecurity, healthcare technology, marketing, and more.
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
