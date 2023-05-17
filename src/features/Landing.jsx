import {
  Badge,
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
export function Landing() {
  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", xl: "7xl" }}
        color="secondary"
      >
        Hi, my name <br /> is Codiku
        <Text as="span" color="primary.dark">
          .
        </Text>
      </Heading>
      <Text fontSize="lg" color="secondary">
        I am{" "}
        <Text as="span" fontWeight="bold">
          a freelance developer/instructor
        </Text>{" "}
        <br /> located in Paris/France
      </Text>
    </Box>
  );

  const badgeExperience = (
    <Badge
      textAlign={"center"}
      alignSelf="flex-start"
      color="white"
      bg="primary.light"
      borderRadius={7}
      p={3}
    >
      <Text fontSize={{ base: "xs", md: "md" }} color="secondary">
        10
        <Text>years of experience</Text>
      </Text>
    </Badge>
  );

  const rightSection = (
    <Flex>
      <Image src={humanImg} maxW={{ base: 200, md: 400 }} />
      {badgeExperience}
    </Flex>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-evenly"
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
}
