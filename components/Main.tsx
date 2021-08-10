import {
  Badge,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Center,
  useDisclosure,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import * as React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaPlus,
  FaInstagram,
} from "react-icons/fa";
import "@fontsource/passion-one";
import { SocialMediaLinks } from "./footer/SocialMediaLinks";
import { Features } from "./Features"



export const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as="section">
      <Box
        maxW="5xl"
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "6", sm: "48" }}
        // textAlign="center"

        rounded="3xl"
      >
        <Heading
          fontFamily="Passion One"
          my="2"
          as="h2"
          fontSize={{ base: "3xl", md: "6xl" }}
          letterSpacing="tight"
          lineHeight="1.2"
        >
          Hi! I&apos;m John Thomas. I go by{" "}
          <Box
            as="mark"
            bg="unset"
            fontWeight="black"
            color="purple.300"
            whiteSpace="nowrap"
            fontFamily="Passion One"
            letterSpacing="wide"
          >
            JT.
          </Box>
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "3xl" }}
          fontWeight="semibold"
          fontFamily="Roboto Condensed"
        >
          I&apos;m a cybersecurity professional, software developer, and storyteller.
          By day, I work at{" "}
          <Badge
            bg="green"
            color="white"
            fontSize={{ base: "md", md: "2xl" }}
            rounded="md"
          >
            Michigan State University
          </Badge>{" "}
          as an information security analyst. By night, I work on various TTRPG-related projects.
        </Text>
        <SocialMediaLinks />
        <SimpleGrid columns={[1, null, 2]} spacing="20px">
          <Stack
            direction={{ base: "column", sm: "column" }}
            mt="90"
            spacing={{ base: "3", md: "5" }}
            maxW="3xl"
          >
            <Heading textTransform="uppercase" size="lg">
              Current Projects
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" mb="10">
              Governance, Risk, and Compliance &mdash;{" "}
              <Link
                color="purple.300"
                textDecorationLine="underline"
                textDecorationStyle="dotted"
                textDecorationThickness="2px"
                textUnderlineOffset="5px"
                href="https://tech.msu.edu/about/office-cio/security/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MSU
              </Link>
            </Text>
            <Text fontSize="xl" fontWeight="semibold" mb="10">
              Cast &mdash;{" "}
              <Link
                color="purple.300"
                textDecorationLine="underline"
                textDecorationStyle="dotted"
                textDecorationThickness="2px"
                textUnderlineOffset="5px"
                href="https://vorpaltales.com/vt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vorpal Tales
              </Link>
            </Text>
            <Text fontSize="xl" fontWeight="semibold" mb="10">
              Digital TTRPG Tools &mdash;{" "}
              <Link
                color="purple.300"
                textDecorationLine="underline"
                textDecorationStyle="dotted"
                textDecorationThickness="2px"
                textUnderlineOffset="5px"
                href="https://github.com/wychroot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wychroot
              </Link>
              {' '}<Badge fontSize="md" rounded="sm" color="gray.50" bgColor="purple.700">Coming Soon</Badge>
            </Text>
            <Text fontSize="xl" fontWeight="semibold" mb="10">
              Game Design &mdash;{" "}
              <Link
                color="purple.300"
                textDecorationLine="underline"
                textDecorationStyle="dotted"
                textDecorationThickness="2px"
                textUnderlineOffset="5px"
                href="https://rivaltheories.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rival Theories
              </Link>
              {' '}<Badge fontSize="md" rounded="sm" color="gray.50" bgColor="purple.700">Coming Soon</Badge>
            </Text>
         
          </Stack>
          <Stack
            direction={{ base: "column", sm: "column" }}
            mt="90"
            spacing={{ base: "3", md: "5" }}
            maxW="3xl"
          >
            <Heading textTransform="uppercase" size="lg">
             Freelance & Speaking
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" mb="10">
              Cybersecurity & Privacy Training
            </Text>
            <Text fontSize="xl" fontWeight="semibold" mb="10">
              Custom Websites
            </Text>
            <Text fontSize="xl" fontWeight="semibold" mb="10">
              Application Development
            </Text>
            <Text fontSize="xl" fontWeight="semibold" mb="10">
              Event and Conference Talks
            </Text>
          </Stack>
        </SimpleGrid>
      
      </Box>
    </Box>
  );
};



export default Main;

