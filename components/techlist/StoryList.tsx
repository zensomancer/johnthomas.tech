import * as React from 'react'
import { FaLock, FaDiceD20, FaRing, FaCode, FaDice, FaQuestion, FaTwitch, FaChalkboardTeacher } from 'react-icons/fa'
import { Box, Icon, Text } from '@chakra-ui/react'
import { List } from './List'
import { ListItem } from './ListItem'
import { Placeholder } from './Placeholder'

export const StoryList = () => {
  return (
    <Box as="section">
      <Box maxW="2xl" mx="auto" p={{ base: '4', md: '8' }}>
        <List spacing="12">
        <ListItem
            title="Event Speaker"
            subTitle="Cybersecurity"
            icon={<Icon as={FaChalkboardTeacher} boxSize="6" />}
            color="green.50"
            fontSize="lg"
            fontWeight="semibold"
          >
            Threat Modeling 101, Personal BC/DR, OPSEC for Activists
          </ListItem>
          <ListItem
            title="Game Designer & Writer"
            subTitle="Rival Theories"
            icon={<Icon as={FaDice} boxSize="6" />}
          color="green.50"
          fontSize="lg"
          fontWeight="semibold"
          >
           I&apos;m currently working on a near-future tabletop roleplaying game that explores conflict in a solarpunk utopia.
          </ListItem>
          <ListItem
            title="Cast Member"
            subTitle="Vorpal Tales"
            icon={<Icon as={FaTwitch} boxSize="6" />}
            color="green.50"
            fontSize="lg"
            fontWeight="semibold"
          >
            Vorpal Tales is a TTRPG liveplay show on Twich that streams every night of the week. I currently play on stream Thursday evenings and Saturday afternoons.
          </ListItem>
       
        
        </List>
      </Box>
    </Box>
  )
}
