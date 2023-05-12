const { WrapItem, Text } = require("@chakra-ui/react");

export const Badge = ({ children, bg }) => {
  return (
    <WrapItem>
      <Text
        w={100}
        bg={bg || "primary.strong"}
        color="white"
        borderRadius={5}
        padding={"3px 5px 3px 5px"}
        textAlign="center"
      >
        {children}
      </Text>
    </WrapItem>
  );
};
