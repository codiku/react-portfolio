import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import bubbleImg from "@/assets/images/bubble.png";
import logoImg from "@/assets/images/logo.png";
import flagENImg from "@/assets/images/flag-en.png";

export function Header() {
  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack>
        <Image src={bubbleImg} h={10} />
        <Link
          href="mailto:codiku.dev@gmail.com?subject=Contacting you from your portfolio"
          fontSize="lg"
          fontWeight="bold"
        >
          Hire me
        </Link>
        <Image pl={20} src={flagENImg} h={8} />
      </HStack>
    </Flex>
  );
}
