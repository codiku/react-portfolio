import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import developerImg from "assets/images/human.png";
import { SkillBadges } from "./SkillBadges";
export function LandingPresentation() {
  const mainText = (
    <>
      <Heading fontSize={{ base: "5xl", lg: "7xl" }} color={"secondary"}>
        Hi, my <br /> name is Codiku
        <Text
          fontSize={{ base: "5xl", lg: "7xl" }}
          as={"span"}
          pl={2}
          color="primary.strong"
        >
          .
        </Text>
      </Heading>
      <Text fontSize={{ base: "xl", lg: "3xl" }} as={"span"} color="secondary">
        I'm an independent{" "}
        <Text as={"span"} fontWeight="bold">
          developer / Instructor
        </Text>
        <br />
        from France, Paris
      </Text>
    </>
  );

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      width="100%"
      justifyContent={"space-evenly"}
      alignItems="center"
    >
      <Box mt={{ base: 50, lg: -200 }}>
        {mainText}
        <SkillBadges />
      </Box>
      <Image src={developerImg} w={[400]} />
    </Flex>
  );
}
