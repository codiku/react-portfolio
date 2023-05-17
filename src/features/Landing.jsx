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
        whiteSpace={"pre-line"}
        fontSize={{ base: "5xl", lg: "7xl" }}
        color={"secondary"}
      >
        <Text>
          My name is Codiku
          <Box as="span" color="primary.dark">
            .
          </Box>
        </Text>
      </Heading>
      <Text fontSize={{ base: "xl", lg: "3xl" }} as={"span"} color="secondary">
        I am
        <Text as={"span"} fontWeight="bold">
          {" "}
          a freelance developer/instructor
        </Text>
        <Text>located in Paris / France</Text>
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
    <Wrap justify={"space-evenly"} mt={{ base: 10, md: 150 }}>
      <WrapItem>{leftSection}</WrapItem>
      <WrapItem>{rightSection}</WrapItem>
    </Wrap>
  );
}
