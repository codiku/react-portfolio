import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import developerImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import { SkillBadges } from "@/features/SkillBadges";
import { badgeColors } from "@/styles/badgeColor";

export function Landing() {
  const { t } = useTranslation("home");
  const mainText = (
    <>
      <Heading
        whiteSpace={"pre-line"}
        fontSize={{ base: "5xl", lg: "7xl" }}
        color={"secondary"}
      >
        <Text>
          {t("introducingName")}
          <Text
            fontSize={{ base: "5xl", lg: "7xl" }}
            as={"span"}
            pl={2}
            color="primary.strong"
          >
            .
          </Text>
        </Text>
      </Heading>
      <Text fontSize={{ base: "xl", lg: "3xl" }} as={"span"} color="secondary">
        {t("iAm")}{" "}
        <Text as={"span"} fontWeight="bold">
          {t("job")}
        </Text>
        <Text>{t("location")}</Text>
      </Text>
    </>
  );

  const leftSection = (
    <>
      {mainText}
      <Box mt={"32"}>
        <SkillBadges
          skills={[
            { label: "React", bg: badgeColors["React"] },
            { label: "Redux", bg: badgeColors["Redux"] },
            { label: "Typescript", bg: badgeColors["Typescript"] },
            { label: "Node.JS", bg: badgeColors["Node.JS"] },
          ]}
        />
      </Box>
    </>
  );

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
        {t("yearOfExp", { years: new Date().getFullYear() - 2013 })}
      </Text>
      <Text color="black">{t("experience")}</Text>
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
      direction={{ base: "column", lg: "row" }}
      justify={"space-evenly"}
      mt={{ base: 10, md: 150 }}
    >
      <Box>{leftSection}</Box>
      <Flex mt={{ base: 100, lg: 0 }}>{rightSection}</Flex>
    </Flex>
  );
}
