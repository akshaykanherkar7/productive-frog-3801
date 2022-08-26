import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import invoiceedit from "./invoiceedit.module.css"
import { TbPhoto } from 'react-icons/tb'

const Invoiceedit  = () => {
  const [invoiceNumnber, setinvoiceNumnber] = useState(1001)
  const [accountname, setaccountname] = useState("Bharat Rozodkar")
  const [nameofClient, setnameofClient] = useState("Sample client")
  return (
    <div className={invoiceedit.main}>
      <div className={invoiceedit.top_buttons}>
        <div >
              <Button rightIcon={<ChevronDownIcon />} colorScheme='gray' variant='outline'>
               More Options
               </Button>
        </div>
        <div className={invoiceedit.top_buttons_right}>
            <Button colorScheme='gray' variant='outline'>
               Schedule Later
               </Button>
               <Button colorScheme='green'>Send Now</Button>
        </div>
      </div>
      <div className={invoiceedit.editbox_main}>
       <div className={invoiceedit.editbox_top}>
       <div> <p><Icon as={TbPhoto}/> Add Background</p></div>
       <div className={invoiceedit.invoiceNum}>
        <p>INVOICE #</p>
        <p>{invoiceNumnber}</p>
        </div>
       </div>
       <div className={invoiceedit.profile} >
          <img className={invoiceedit.profile_image} src='https://cdn-icons-png.flaticon.com/512/20/20079.png' alt=''/>
          <p className={invoiceedit.profile_text}>Sample Client Invoice</p>
       </div>
       <hr/>
       <div className={invoiceedit.detail} >
        <div>
          <p>FROM</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Invoiceedit 
