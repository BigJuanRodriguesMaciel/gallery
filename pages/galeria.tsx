import { NextPage } from 'next'
import React, { useState } from 'react'
import UnderMenuOptions from '../src/components/UnderMenuOptions'
import { GaleriaPage } from '../src/styles/pages/Galeria'
import GalleryList from '../src/components/GalleryList';
import { Container } from '@mui/material';

  const Galeria: NextPage = () => {
  const [showUnderMenuOptions, setShowUnderMenuOptions] = useState(false)
  setTimeout(() => {
    setShowUnderMenuOptions(true)
  }, 2000);
  return (
    <GaleriaPage>
      <Container>
        <GalleryList/>
      </Container>
      {
        showUnderMenuOptions &&
        <UnderMenuOptions />
      }
    </GaleriaPage>
  )
}

export default Galeria