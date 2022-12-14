import { Stack, Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Particle from '../../components/Particles'
import Header from './components/Header'

const PublicLayout = () => {
  return (
    <Stack sx={{ width: '100%', height: '100vh', border: '1px dashed black', backgroundColor: '#242F40', flexDirection: 'row', position: 'relative' }}>
      <Particle />
      <Box sx={{ position: 'fixed', left: 0, right: 0, top: 0 }}>
        <Header />
      </Box>
      <Stack pt='5em' sx={{zIndex: 100}} >
        <Outlet />
      </Stack>
    </Stack>
  )
}

export default PublicLayout