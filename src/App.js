import { Box, Heading, HStack, Text } from "@chakra-ui/react";

export default function App() {
  return <>
    <Heading>This is a title using poppins font</Heading>
    <Text>This is a text using inter font</Text>
    <HStack spacing={0}>
      <Box h={100} w={100} bg="primary.strong" />
      <Box h={100} w={100} bg="primary.light" />
      <Box h={100} w={100} bg="secondary" />
    </HStack>
  </>
}