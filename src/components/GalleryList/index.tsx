import { Masonry } from '@mui/lab'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Card } from './index.styled';

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
    const numberToHeight = [100, 150, 200, 250];
    const getHeight = () => {
        const postionInArray = Math.floor(Math.random() * 3)
        return numberToHeight[postionInArray]
    }
    const [showCards, setShowCards] = useState(false)

    setTimeout(() => {
        setShowCards(true)
    }, 1500);

    return (
        <Box sx={{ width: '100vw', minHeight: '100vh', backgroundColor: '#294958' }}>
            {
                showCards &&
                <Masonry columns={2} spacing={2}>
                    {galleries && galleries?.map((item:GalleryItem, index:number) => (
                        <Card key={index}>
                            <Box sx={{ height:getHeight }}>
                                {/* <Box sx={{padding: '20px 0'}}>
                                    <h2>{item.gallery.name}</h2>
                                </Box> */}
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
                                            right: 5
                                        }}
                                        onClick={() => confirm('Quer mesmo deletar esta galeria?')}
                                    >
                                        <RemoveCircleIcon color="error"/>
                                    </button>
                                </div>
                            </Box>
                        </Card>
                    ))}
                </Masonry>
            }
        </Box>
    )
}