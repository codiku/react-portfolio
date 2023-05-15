import { HStack, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export function Footer() {
  return (
    <HStack justify="center" h={130} bg={"secondary"}>
      <Link href="https://twitter.com" isExternal>
        <Icon w={8} h={8} color="#03A9F4" as={BsTwitter} />
      </Link>
      <Link href="https://linkedin.com" isExternal>
        <Icon
          w={8}
          h={8}
          bg="white"
          borderRadius={5}
          color="#0D73C6"
          as={BsLinkedin}
        />
      </Link>
      <Link href="https://github.com" isExternal>
        <Icon w={8} h={8} color="white" as={BsGithub} />
      </Link>
    </HStack>
  );
}
