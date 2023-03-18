import { Badge, Box, Center, HStack, Text } from "@chakra-ui/react";

export function SkillBadges({ children }) {
  const badge = (text, bg) => {
    return (
      <Text
        minW={100}
        bg={bg || "primary.strong"}
        color="white"
        borderRadius={5}
        padding={"3px 5px 3px 5px"}
        textAlign="center"
      >
        {text}
      </Text>
    );
  };
  return (
    <HStack mt={30} mb={30}>
      {badge("React.JS")}
      {badge("Redux", "black")}
      {badge("Typescript", "secondary")}
      {badge("Node.JS", "blackAlpha.600")}
    </HStack>
  );
}
