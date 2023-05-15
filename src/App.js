import { Box } from "@chakra-ui/react";
import { Header } from "features/Header";
import { Landing } from "features/Landing";
import { LatestProjects } from "features/LatestProject";

export default function App() {
  return (
    <Box p={20}>
      <Header />
      <Box>
        <Landing />
        <LatestProjects />
      </Box>
    </Box>
  );
}
