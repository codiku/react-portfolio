import { Box } from "@chakra-ui/react";
import { Header } from "./features/Header";
import { Landing } from "./features/Landing";
import { LatestProjects } from "./features/LatestProjects";
import { Footer } from "@/features/Footer";
export function App() {
  return (
    <>
      <Box p={20}>
        <Header />
        <Landing />
        <LatestProjects />
      </Box>
      <Footer />
    </>
  );
}
