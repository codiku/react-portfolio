import { Box } from "@chakra-ui/react";
import { Header } from "./features/Header";
import { Landing } from "./features/Landing";

export function App() {
  return (
    <Box p={20}>
      <Header />
      <Landing />
    </Box>
  );
}
