import { Box } from '@chakra-ui/react'
import React from 'react'
import "./Navbar.css"

export const Footer = () => {
  return (
    <Box className="footerContainer">
        <Box className="fChildContainer">
          <h6>PRODUCT</h6>
          <p> Proposals</p>
          <p> Contracts</p>
          <p> Invoicing</p>
          <p> Client CRM</p>
          <p> Time Tracking</p>
          <p> Task Tracking</p>
          <p> Forms</p>
          <p> Accounting</p>
          <p> Bonsai Tax</p>
          <p> Bonsai Cash</p>
          <p> Pricing</p>
          <p>Bonsai Reviews</p>
        </Box>
        <Box className="fChildContainer">
          <h6>FREE RESOURCES</h6>
          <p>Freelance Resources</p>
          <p>Freelance Blog by Bonsai</p>
          <p>How to Write a Contract</p>
          <p>Online Signature Maker</p>
          <p>Self-Employed Taxes Hub</p>
          <p>Self-Employed Tax Calculator</p>
          <p>Self-Employed Tax Deductions</p>
          <h6 style={{marginTop:"25%"}}>Templates</h6>
          <p>Invoice Templates
</p>
          <p>Proposal Templates
</p>
          <p>Contract Templates
</p>
          <p>Agreement Templates
</p>
          <p>Scope of Work Templates
</p>
          <p>Quote Templates</p>
          <p>Credit Note Templates</p>
          <p>
Estimate Templates</p>
        </Box>
        <Box className="fChildContainer">
          <h6>BONSAI</h6>
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Privacy policy</p>
          <p>Legal</p>
          <p>Affiliates</p>
          <p>Write for Us</p>
        </Box>
      </Box>
  )
}
