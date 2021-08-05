import { Stack, Flex, Circle, Text, useColorModeValue, Heading, StackProps } from '@chakra-ui/react'
import * as React from 'react'
import { FaGreaterThanEqual } from 'react-icons/fa'

export interface ListItemProps extends StackProps {
  title: string
  subTitle: string
  icon?: React.ReactElement
  isLastItem?: boolean
}

export const ListItem = (props: ListItemProps) => {
  const { title, subTitle, icon, isLastItem, children, ...stackProps } = props

  return (
    <Stack as="li" direction="row" spacing="4" {...stackProps}>
      <Flex direction="column" alignItems="center" aria-hidden="true">
        <Circle
          bg='green.500'
          size="12"
          borderWidth="4px"
          borderColor={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('white', 'black')}
        >
          {icon}
        </Circle>
        {!isLastItem && <Flex flex="1" borderRightWidth="1px" mb="-12" />}
      </Flex>
      <Stack spacing="4" pt="1" flex="1">
        <Flex direction="column">
          <Heading fontSize="2xl" fontWeight="black">
            {title}
          </Heading>
          <Text fontSize="xl" color='green.50' fontWeight="bold">
            {subTitle}
          </Text>
        </Flex>
        <Flex textAlign="left" >{children}</Flex>
      </Stack>
    </Stack>
  )
}
