import {
  Badge,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { NavBar } from "./nav/NavBar";

export const LayoutMain = (props: any) => {
  return (
    <Box
      bgImg="/bg.jpg"
      bgPos="center"
      color="gray.100"
      minH="100vh"
      h="100%"
      display="flex"
      flexDirection="column"
    >
      {props.children}
    </Box>
  );
};
