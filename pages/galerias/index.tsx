import { NextPage } from 'next'
import React, { useState } from 'react'
import { Container } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios'
import { GaleriaPage } from '../../src/styles/pages/Galeria';
import UnderMenuOptions from '../../src/components/UnderMenuOptions';
import GalleryList from '../../src/components/GalleryList';

  const Galerias: any = () => {
  
    const [galleries, seGalleries] = useState<any>()

    const { data, isLoading, error } = useQuery(['react-query-estudos'], async () => {
    const response = await axios.get('https://62d56890d4406e52355a2e21.mockapi.io/galeria')
      seGalleries(response.data)
      // return response
    }, 
    {
      staleTime: 1000 * 60 * 2 // 2 minutos
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

export default Galerias