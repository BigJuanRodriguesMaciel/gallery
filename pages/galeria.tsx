import { NextPage } from 'next'
import React from 'react'
import UnderMenuOptions from '../src/components/UnderMenuOptions'
import { GaleriaPage } from '../src/styles/pages/Galeria'


const Galeria: NextPage = () => {
  return (
    <GaleriaPage>
      <UnderMenuOptions />
    </GaleriaPage>
  )
}

export default Galeria