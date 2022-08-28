import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import success from "./success.module.css"
import { Link } from 'react-router-dom'

const Success = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
         <Button colorScheme="green" onClick={onOpen}>
            Send Now
          </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={ onClose}>
        <ModalOverlay />
        <ModalContent padding={"50px 50px 50px 50px"}>
          <ModalCloseButton />
          <ModalBody >
               <img src='success.svg'/>
               <Text className={success.text}>Invoice Successfully Send to Client!</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' margin={"auto"} marginTop="20px" onClick={ onClose}>
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
         </Modal>
    </div>
  )
}

export default Success
