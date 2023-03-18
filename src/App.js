import { Box, Container, Heading, HStack, Text, Flex } from "@chakra-ui/react";
import { Header } from "components/Header";
import { LandingPresentation } from "components/LandingPresentation";
import { SkillBadges } from "components/SkillBadges";

export default function App() {
  return <Flex direction="column" p={10}  >
    <Box flex={1}>
      <Header />
    </Box>
    <Box mt={100} flex={5} pl={{ base: 0, xl: 250 }}
      pr={{ base: 0, xl: 250 }}>
      <LandingPresentation />
    </Box>
  </Flex >
}
// href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}