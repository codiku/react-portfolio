import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import developerImg from "assets/images/human.png";
import { useTranslation } from "react-i18next";
import { SkillBadges } from "./SkillBadges";
import { badgeColors } from "styles/badgeColor";

export function Introduction() {
  const { t } = useTranslation("home");
  const mainText = (
    <>
      <Heading fontSize={{ base: "5xl", lg: "7xl" }} color={"secondary"}>
        {t("introducingName")}
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
        {t("iAm")}{" "}
        <Text as={"span"} fontWeight="bold">
          {t("job")}
        </Text>
        {t("location")}
      </Text>
    </>
  );

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      width="100%"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Box mt={{ base: 50, lg: -200 }}>
        {mainText}
        <SkillBadges
          skills={[
            { label: "React", bg: badgeColors["React"] },
            { label: "Redux", bg: badgeColors["Redux"] },
            { label: "Typescript", bg: badgeColors["Typescript"] },
            { label: "Node.JS", bg: badgeColors["Node.JS"] },
          ]}
        />
      </Box>
      <Flex direction={"column"}>
        <Badge
          w={160}
          textAlign={"center"}
          alignSelf="flex-end"
          color="white"
          bg="primary.light"
          borderRadius={7}
          pt={3}
          pb={3}
          top={100}
        >
          <Text fontSize={"2xl"} color="black">
            {t("yearOfExp", { years: new Date().getFullYear() - 2013 })}
          </Text>
          <Text color="black">{t("experience")}</Text>
        </Badge>
        <Image src={developerImg} w={[400]} />
      </Flex>
    </Flex>
  );
}
