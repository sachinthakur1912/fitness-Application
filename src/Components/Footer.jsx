import React from 'react'
import Logo from '../assets/images/Logo-1.png'
import { Box,Stack, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px'>
      <img src={Logo} alt='logo' width='200px' height='40px'/>
      <Typography variant='h5' pb='10px' mt='40px'>
        Made by sachin thakur
      </Typography>
      </Stack>
    </Box>
  )
}
