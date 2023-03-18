import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import developerImg from "assets/images/human.png";
export function LandingPresentation() {
  const mainText = (
    <Box>
      <Heading fontSize={"7xl"} color={"secondary"}>
        Hi, my <br /> name is Codiku
        <Text fontSize={"7xl"} as={"span"} pl={2} color="primary.strong">
          .
        </Text>
      </Heading>
      <Text fontSize={"3xl"} as={"span"} color="secondary">
        I'm an independent{" "}
        <Text as={"span"} fontWeight="bold">
          developer / Instructor
        </Text>
        <br />
        from France, Paris
      </Text>
    </Box>
  );

  const image = <Image src={developerImg} w={400} />;
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={{ base: "column", xl: "row" }}
    >
      <Box>{mainText}</Box>
      <Box>{image}</Box>
    </Flex>
  );
}
