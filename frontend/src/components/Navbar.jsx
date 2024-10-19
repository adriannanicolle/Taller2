import { Box, Container, Flex } from "@chakra-ui/react";

const Navbar = ()=> {
    return <Container maxW={"900px"}>
        <Box
        px={4}
        my={4}
        borderRadius={5}
        
        >
        <Flex h="16"
            alignItems={"center"}
            justifyContent={"space-between"} 
            > 
            {/* left side */ }
            <Flex
            alignItems={"center"}
            justifyContent={"center"} 
            gap={3}
            display={{base:"none", sm:"flex"}}
            > 
            <img src="/1.png" alt="1 logo" width={50} height={50}/>
            <Text fontSize={"40px"}>+</Text>
            <img src="/2.png" alt="2 logo" width={50} height={50}/>
            <Text fontSize={"40px"}>=</Text>
            <img src="/3.png" alt="3 logo" width={50} height={45}/>
            </Flex>
            {/* right side */ }
            <Flex> </Flex>
        
        </Flex>

         </Box>

    </Container>;
};
export default Navbar