import { Flex } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Body } from "components/Body";

export default function App() {
  return (
    <Flex direction="column" p={10} h="100%">
      <Flex flex={1}>
        <Header />
      </Flex>
      <Flex flex={6}>
        <Flex width={"100%"} alignItems="center">
          <Body />
        </Flex>
      </Flex>
    </Flex>
  );
}
