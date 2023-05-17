import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import developerImg from "@/assets/images/human.png";

export function Landing() {
  const mainText = (
    <>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", xl: "7xl" }}
        color={"secondary"}
      >
        Hi, My name
        <Text>
          is Codiku
          <Box as="span" color="primary.dark">
            .
          </Box>
        </Text>
      </Heading>
      <Text fontSize={"lg"} as={"span"} color="secondary">
        I am
        <Text as={"span"} fontWeight="bold">
          {" "}
          a freelance developer/instructor
        </Text>
        <br />
        located in Paris / France
      </Text>
    </>
  );

  const leftSection = <Box>{mainText}</Box>;

  const badgeExperience = (
    <Badge
      w={160}
      textAlign={"center"}
      alignSelf="flex-end"
      color="white"
      bg="primary.light"
      borderRadius={7}
      pt={3}
      pb={3}
    >
      <Text fontSize={"2xl"} color="black">
        {new Date().getFullYear() - 2013}
      </Text>
      <Text color="black">years of experiences</Text>
    </Badge>
  );
  const rightSection = (
    <>
      <Flex position="absolute" justify={"flex-end"}>
        {badgeExperience}
      </Flex>
      <Image src={developerImg} w={400} />
    </>
  );
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={"space-evenly"}
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      <Box mt={{ base: 10, md: 0 }}>{rightSection}</Box>
    </Flex>
  );
}
