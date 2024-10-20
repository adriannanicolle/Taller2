import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";


function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />

      <Container maxW={"1200px"} my={4}>
        <Text
        fontSize={{base: "3x1", md: "50"}}
        fontWeight={"bold"}
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textAling={"center"}
        mb={8}
        >
          <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
            my friends xd
          </Text>
          🐈‍⬛
        </Text>
        <UserGrid/>
        
      </Container>
    </Stack>
  );
}
export default App
