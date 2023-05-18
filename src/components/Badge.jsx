import { Flex, Heading } from "@chakra-ui/react";

export const Badge = ({ children, bg }) => {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        size={"sm"}
        bg={bg}
        color="white"
        borderRadius={3}
        padding={"10px 30px 10px 30px"}
        textAlign="center"
      >
        {children}
      </Heading>
    </Flex>
  );
};
