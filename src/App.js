import { Box } from "@chakra-ui/react";
import { Header } from "features/Header";
import { Introduction } from "features/Introduction";
import { LatestProjects } from "features/LatestProject";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box p={10}>
        <Header />
        <Box ml={{ base: 0, lg: 40 }} mr={{ base: 0, lg: 40 }} mt={150}>
          <Introduction />
          <LatestProjects />
        </Box>
      </Box>
    </QueryClientProvider>
  );
}
