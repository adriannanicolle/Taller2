import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Textarea, useDisclosure } from "@chakra-ui/react"
import { BiAddToQueue } from "react-icons/bi"

const CreateUserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} >
                <BiAddToQueue size={20} />
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> mi nuevo pana 🤑</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Flex alignItems={"center"} gap={4}>
                            {/* Left */}
                            <FormControl>
                                <FormLabel>nombre completo</FormLabel>
                                <Input placeholder="samircitoxd" />
                            </FormControl>

                            {/* Right */}
                            <FormControl>
                                <FormLabel>Roles</FormLabel>
                                <Input placeholder="Ingeniero En Sex" />
                            </FormControl>
                        </Flex>

                        <FormControl mt={4}>
                            <FormLabel>Descripcion</FormLabel>
                            <Textarea
                                resize={"none"}
                                overflow={"hidden"}
                                placeholder="Es un papichulo de las Contadoras."
                            />
                        </FormControl>

                        <RadioGroup mt={4}>
                            <Flex gap={5}>
                                <Radio value='male'>Hombre</Radio>
                                <Radio value='female'>Hembra</Radio>
                            </Flex>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            Añadir
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
export default CreateUserModal;
