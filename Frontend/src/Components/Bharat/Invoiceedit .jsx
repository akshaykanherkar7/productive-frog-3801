import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Icon } from '@chakra-ui/react'
import React from 'react'
import invoiceedit from "./invoiceedit.module.css"
import { TbPhoto } from 'react-icons/tb'

const Invoiceedit  = () => {
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
       <div>
       <div> <p><Icon as={TbPhoto}/> Add Background</p></div>
       <div>
        <p></p>
        <p></p>
        </div>
        <p></p>
       </div>
       <div>

       </div>
      </div>
    </div>
  )
}

export default Invoiceedit 
