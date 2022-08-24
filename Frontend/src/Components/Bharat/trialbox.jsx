import React from 'react'
import { Icon } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import trialbox from "./trialbox.module.css"

const Trialbox = () => {
  return (
    <div className={trialbox.trialbox_main}>
      <div className={trialbox.left_div}><Icon className={trialbox.icon} as={InfoOutlineIcon}/>
        </div>
      <div className={trialbox.trialbox_left}>
        <p className={trialbox.trialbox_text1}>Start 7 Day Free Trial</p>
        <p>You currently dont have an active subscription.<a className={trialbox.atr} href='www.google.com'>Start your Free Trial now!</a></p>
      </div>
    </div>
  )
}

export default Trialbox
