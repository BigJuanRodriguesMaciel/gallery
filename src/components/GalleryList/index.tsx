import { Masonry } from '@mui/lab'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Card } from './index.styled';

type Props = {}

export default function GalleryList({}: Props) {

    const heights = [120, 150, 175, 200, 150, 130, 150, 130, 150, 130, 100, 150, 100, 100, 150, 150, 100, 150, 100, 150, 130, 150, 130, 150, 130, 100, 150, 100, 100, 150];
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
            <Box sx={{padding: '20px 0'}}>
                <h2>Today s capture</h2>
            </Box>
            {
                showCards &&
                <Masonry columns={2} spacing={2}>
                    {heights.map((height, index) => (
                        <Card key={index}>
                            <Box sx={{ height:getHeight }}>
                                <div style={{
                                    backgroundImage: `url('http://loremflickr.com/640/480')`,
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