import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import success from "./success.module.css"
import {useNavigate} from "react-router-dom"

const Success = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()
      const navigate=useNavigate ()
      const handleclose=()=>{
        navigate("/dashboard")
      }
  return (
    <div>
         <Button onClick={onOpen}>Open Modal</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={ onClose}>
        <ModalOverlay />
        <ModalContent padding={"50px 50px 50px 50px"}>
          <ModalCloseButton />
          <ModalBody >
               <img src='success.svg'/>
               <Text className={success.text}>Invice Created successfully !</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' margin={"auto"} marginTop="20px" onClick={ onClose}>
              Go to Dashboard
            </Button>
          </ModalFooter>
        </ModalContent>
         </Modal>
    </div>
  )
}

export default Success
