import { NextPage } from 'next'
import React, { useState } from 'react'
import UnderMenuOptions from '../src/components/UnderMenuOptions'
import { GaleriaPage } from '../src/styles/pages/Galeria'
import GalleryList from '../src/components/GalleryList';
import { Container } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios'

  const Galeria: any = () => {
  
    const [showUnderMenuOptions, setShowUnderMenuOptions] = useState(false)
    const [galleries, seGalleries] = useState<any>()
    setTimeout(() => {
      setShowUnderMenuOptions(true)
    }, 500);

    const { data, isLoading, error } = useQuery(['react-query-estudos'], async () => {
    const response = await axios.get('https://62d56890d4406e52355a2e21.mockapi.io/galeria')
      seGalleries(response.data)
      // return response
    }, 
    {
      staleTime: 1000 * 5 // 5 seconds
    }
  )

    return (
      <GaleriaPage>
        <Container>
          <GalleryList galleries={galleries}/>
        </Container>
        {
          galleries &&
          <UnderMenuOptions />
        }
      </GaleriaPage>
    )
}

export default Galeria