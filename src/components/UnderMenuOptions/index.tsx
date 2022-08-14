import React from 'react'
import { MenuOptions, IconOptionPlus } from './index.styled' 
import AddCircleIcon from '@mui/icons-material/AddCircle';

type Props = {}

export default function UnderMenuOptions({}: Props) {
  return (
    <MenuOptions>
      <IconOptionPlus>
        <AddCircleIcon
          sx={{ 
            fontSize: 50,
            color: '#294958',
            backgroundColor: '#F6B769'
          }}
        />
      </IconOptionPlus>
    </MenuOptions>
  )
} 