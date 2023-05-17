import { Flex, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
export function Header() {
  return (
    <Flex justify="space-between">
      <Image src={bubbleImg} h={10} />
      <Image src={logoImg} h={10} />
      <Link>Hire me</Link>
      <Image src={flagENImg} h={8} />
    </Flex>
  );
}
