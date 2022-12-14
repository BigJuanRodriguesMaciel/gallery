import { Masonry } from '@mui/lab'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Card, GalleryTitle } from '../styles/index.styled';
import zIndex from '@mui/material/styles/zIndex';
import Link from 'next/link';

type Props = {
    galleries: any
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


export default function GalleryList({galleries}: Props) {
    const numberToHeight = [150, 200, 250, 300, 350];
    const getHeight = () => {
        const postionInArray = Math.floor(Math.random() * 3)
        return numberToHeight[postionInArray]
    }

    return (
        <Box sx={{ width: '100vw', minHeight: '100vh', backgroundColor: '#294958' }}>
            {
                galleries &&
                <Masonry columns={2} spacing={2}>
                    {galleries && galleries?.map((item:GalleryItem, index:number) => (
                        <Link href={`/galeria/${item.gallery.name.replace(' ','-')}/${item.id}`} key={index}>
                            <Card>
                                <Box sx={{ height:getHeight, position: 'relative' }}>
                                    <GalleryTitle>
                                        <h2>{item.gallery.name}</h2>
                                    </GalleryTitle>
                                    <div style={{
                                        backgroundImage: `url(${item.layer_photo})`,
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
                        </Link>
                    ))}
                </Masonry>
            }
        </Box>
    )
}