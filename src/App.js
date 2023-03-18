import { Box, Container, Heading, HStack, Text, Flex } from "@chakra-ui/react";
import { Header } from "components/Header";
import { LandingPresentation } from "components/LandingPresentation";

export default function App() {
  return <Flex direction="column" p={10} minH="100vh" >
    <Flex flex={1}  >
      <Header />
    </Flex>
    <Flex flex={6} >
      <Flex width={"100%"} alignItems="center">
        <LandingPresentation />
      </Flex>
    </Flex>
  </Flex >
}
