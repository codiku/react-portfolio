const { WrapItem, Text, Heading } = require("@chakra-ui/react");

export const Badge = ({ children, bg }) => {
  return (
    <WrapItem flex justifyContent={"center"} alignItems={"center"}>
      <Heading
        size={"sm"}
        bg={bg || "primary.strong"}
        color="white"
        borderRadius={3}
        padding={"10px 30px 10px 30px"}
        textAlign="center"
      >
        {children}
      </Heading>
    </WrapItem>
  );
};
