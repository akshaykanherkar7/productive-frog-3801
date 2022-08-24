import { Button, Select } from '@chakra-ui/react'
import React from 'react'
import Noinvoices from "./Noinvoices.module.css"
import { ChevronRightIcon} from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/icons'
// import { Icon, createIcon } from '@chakra-ui/react'
import {  FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

const Noinvoicebox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <div className={Noinvoices.main_box}>
   <div className={Noinvoices.main_box_child}>
     <div className={Noinvoices.left_box}>
    <img src='https://app.hellobonsai.com/assets/welcome_states/invoicing-illustration-38e5a40c0bb236de8ddf773e91c0c6fc1d64fba164f52e7c86ba32d401e2f4b4.png' alt=''/>
    </div>
    <div className={Noinvoices.right_box}>
        <p className={Noinvoices.right_box_title}>Easy Invoicing & Payments</p>
        <p className={Noinvoices.right_box_text1}>Send invoices and accept online payments. Schedule them to send in the future, and Bonsai will automatically sends client reminders for payment.</p>
         <Button onClick={onOpen} colorScheme='green' variant='solid'>Create an Invoice</Button>
           <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className={Noinvoices.header} margin={"auto"}>Create an Invoice</ModalHeader>
          <ModalCloseButton />
          <hr className={Noinvoices.hrline}/>
          <ModalBody pb={6}>
            <FormControl className={Noinvoices.input_box}>
             <FormLabel className={Noinvoices.form_label}>INVOICE TYPE</FormLabel>
             <Select placeholder='Single Invoice'>          
              <option value='Single Invoice'>Single Invoice</option>
              <option value='Recuring Invoice'>Recuring Invoice</option>
              <option value='Bundled Invoice'>Bundled Invoice</option>
             </Select>
            </FormControl>
             <FormControl className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>CLIENT NAME</FormLabel>
              <Input ref={initialRef} placeholder='Jane Smith' />
            </FormControl>
            <FormControl mt={4} className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>CLIENT EMAIL</FormLabel>
              <Input placeholder='new@gmail.com' />
            </FormControl>
            <FormControl className={Noinvoices.input_box}>
              <FormLabel className={Noinvoices.form_label}>NEW PROJECT NAME</FormLabel>
              <Input  placeholder='Homepage Redesign' />
            </FormControl>            
          </ModalBody>
           <hr className={Noinvoices.hrline2}/>
          <ModalFooter>
            <Button colorScheme='green' w={"90%"} margin="auto">
              Create Invoice
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <p className={Noinvoices.right_box_text2}>LEARN MORE <Icon as={ChevronRightIcon} /></p>
        <div className={Noinvoices.right_bottom_design}></div>
    </div>
   </div>
    <div className={Noinvoices.right_bottom_design_box}>
     <img className={Noinvoices.right_bottom_design} src="https://app.hellobonsai.com/assets/welcome_states/welcome-state-background-2-ad73cb5ffc2c2ee3e8f89ffac81933f9f4245aaacc13df8c6a007b2280c09f38.png" alt="" />
    </div>
    
    </div>
  )
}

export default Noinvoicebox
