import { Box } from "@chakra-ui/react";
import { Footer } from "features/Footer";
import { Header } from "features/Header";
import { Landing } from "features/Landing";
import { LatestProjects } from "features/LatestProject";
import { FirebaseApp } from "utils/firebase";
FirebaseApp.init();
export default function App() {
  return (
    <>
      <Box p={20}>
        <Header />
        <Box mb={60}>
          <Landing />
        </Box>
        <LatestProjects />
      </Box>
      <Footer />
    </>
  );
}
