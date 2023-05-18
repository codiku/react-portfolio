import { HStack, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
export function Footer() {
  return (
    <HStack justify="center" h={130} bg="secondary">
      <Link href="https://twitter.com" isExternal>
        <Icon as={BsTwitter} w={8} h={8} color="#03A9F4" />
      </Link>
      <Link href="https://linkedin.com" isExternal>
        <Icon
          borderRadius={5}
          as={BsLinkedin}
          w={8}
          h={8}
          color="#0D73C6"
          bg="white"
        />
      </Link>
      <Link href="https://github.com" isExternal>
        <Icon as={BsGithub} w={8} h={8} color="white" />
      </Link>
    </HStack>
  );
}
