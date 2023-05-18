import { Flex, Heading } from "@chakra-ui/react";

export function Badge({ bg, children }) {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        w={130}
        textAlign="center"
        size={"sm"}
        bg={bg}
        color="white"
        borderRadius={3}
        px={3}
        py={3}
      >
        {children}
      </Heading>
    </Flex>
  );
}
