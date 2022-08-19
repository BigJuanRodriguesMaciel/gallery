import { Masonry } from '@mui/lab'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import zIndex from '@mui/material/styles/zIndex';
import Link from 'next/link';
import { Card, GalleryTitle } from '../styles/index.styled';
import axios from 'axios';

type Props = {
    images: any
}

type Image = {
    id: string,
    name: string,
    createdAt: string,
    url: string,
}

type Gallery = {
    id: string,
    name: string,
    createdAt: string,
    images: Array<Image>
}

type GalleryItem = {
        layer_photo: string,
        createdAt: string,
        gallery: Gallery
        id: string
}


export default function ImageList({images}: any) {
    const numberToHeight = [150, 200, 250, 300, 350];
    const getHeight = () => {
        const postionInArray = Math.floor(Math.random() * 3)
        return numberToHeight[postionInArray]
    }

    console.log(`ffsc .`, images)

    return (
        <Box sx={{ width: '100vw', minHeight: '100vh', backgroundColor: '#294958' }}>
            <h1>{images?.gallery?.name}</h1>
            {
                images &&
                <Masonry columns={2} spacing={2}>
                    {images && images?.gallery?.images.map((item:any, index:number) => (
                        <>
                            <Card>
                                <Box sx={{ height:getHeight, position: 'relative' }}>
                                    <div style={{
                                        backgroundImage: `url(${item.url})`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative'
                                    }}>
                                        <button
                                            style={{
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                position: 'absolute',
                                                top: 5,
                                                right: 5,
                                                zIndex: 10,
                                            }}
                                            onClick={() => confirm('Quer mesmo deletar esta galeria?')}
                                        >
                                            <RemoveCircleIcon color="error"/>
                                        </button>
                                    </div>
                                </Box>
                            </Card>
                        </>
                    ))}
                </Masonry>
            }
        </Box>
    )
}