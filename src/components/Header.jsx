import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import logoImg from "assets/images/logo.png";
import bubbleImg from "assets/images/bubble.png";
import flagEnImg from "assets/images/flag-en.png";
export function Header() {
  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <Box>
        <HStack>
          <Image src={bubbleImg} h={10} />
          <Text fontWeight={"bold"} fontSize={"lg"}>
            Hire me
          </Text>
          <Image pl={20} src={flagEnImg} h={8} />
        </HStack>
      </Box>
    </Flex>
  );
}
