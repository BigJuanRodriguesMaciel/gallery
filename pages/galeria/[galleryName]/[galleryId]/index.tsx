import { GetServerSideProps, NextPage } from 'next'
import React, { useState } from 'react'
import { Container } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios'
import { GaleriaPage } from '../../../../src/styles/pages/Galeria';
import UnderMenuOptions from '../../../../src/components/UnderMenuOptions';
import GalleryList from '../../../../src/components/GalleryList';
import { useRouter } from 'next/router';
import ImageList from '../../../../src/components/ImageList';

export default function Galeria ({images}:any) {
  
    const router = useRouter()
    const [gallerieImages, seGalleriesImages] = useState<any>()
    const [id, setId] = useState<any>(router.query.galleryId)
    // const { data, isLoading, error } = useQuery(['react-query-estudos'], async () => {
    //   console.log(id)
    //   const response = await axios.get(`https://62d56890d4406e52355a2e21.mockapi.io/galeria/${id}`)
    //     seGalleriesImages(response.data)
    //     console.log(`gallerieImages`, id)
    //     // return response
    //   }, 
    //   {
    //     staleTime: 1000 * 60 * 2 // 2 minutos
    //   }
    // )
    console.log(JSON.parse(images))
    return (
      <GaleriaPage>
        <Container>
          <ImageList images={JSON.parse(images)}/>
        </Container>
        {
          images &&
          <UnderMenuOptions />
        }
      </GaleriaPage>
    )
}

export const getServerSideProps: any = async ({ query }:any) => {
  const id = query.galleryId

  const getImages = async () => {
    const response = await axios.get(`https://62d56890d4406e52355a2e21.mockapi.io/galeria/${id}`)
    return JSON.stringify(response.data)
  }

  const images = await getImages()
  return{ 
    props: {
      images
    }
  }
}