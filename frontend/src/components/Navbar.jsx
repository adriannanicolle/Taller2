import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5"; // Asegúrate de importar el icono
import { LuSun } from "react-icons/lu"; // Asegúrate de importar el icono
import CreateUserModal from "./CreateUserModal";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return( <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700" )}>
            <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
                {/* left side */}
                <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={3}
                    display={{ base: "none", sm: "flex" }}
                >
                    <img src="/1.png" alt="1 logo" width={50} height={50} />
                    <Text fontSize={"40px"}>+</Text>
                    <img src="/2.png" alt="2 logo" width={50} height={50} />
                    <Text fontSize={"40px"}>=</Text>

                    <img src="/3.png" alt="3 logo" width={50} height={45} />
                </Flex>
                {/* right side */}
                <Flex gap={3} alignItems={"center"}>
                    <Text fontSize={"lg"} fontWeight={500} display={{ base: "none", md: "block"}}>
                        waos 🔥
                    </Text>

                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                    </Button>

                    <CreateUserModal/>
                </Flex>
            </Flex>
        </Box>
    </Container>
    );
};
export default Navbar