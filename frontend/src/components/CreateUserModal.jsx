import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { BiAddToQueue } from "react-icons/bi"

const CreateUserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( <>
    <Button onClick={onOpen} >
        <BiAddToQueue size={20}/>
    </Button>

    <Modal
    isOpen={isOpen}
    onClose={onClose}
    >
        <ModalOverlay/>
        <ModalContent> 
            <ModalHeader> mi nuevo pana 🤑</ModalHeader>
            <ModalCloseButton />
                <ModalBody pb={6}> 
                    <Flex
                    alignItems={"center"} gap={4}
                     > 
                     <FormControl>
                        <FormLabel> nombre completo</FormLabel>
                        <Input placeholder="samircitoxd" />
                     </FormControl>
                     </Flex>
                </ModalBody>
        </ModalContent>

    </Modal>
    </>
    );
};
export default CreateUserModal;
