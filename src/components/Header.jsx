import { Box, Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "assets/images/logo.png";
import bubbleImg from "assets/images/bubble.png";
import flagEnImg from "assets/images/flag-en.png";
import { useTranslation } from "react-i18next";
export function Header() {
  const { t } = useTranslation("home");

  return (
    <Flex justify={"space-between"} width={"100%"}>
      <Image src={logoImg} h={10} />
      <Box>
        <HStack>
          <Image src={bubbleImg} h={10} />
          <Link
            href={
              "mailto:codiku.dev@gmail.com?subject=Contacting you from your portfolio"
            }
            fontWeight={"bold"}
            fontSize={"lg"}
          >
            {t("hireMe")}
          </Link>
          <Image pl={20} src={flagEnImg} h={8} cursor="pointer" />
        </HStack>
      </Box>
    </Flex>
  );
}
