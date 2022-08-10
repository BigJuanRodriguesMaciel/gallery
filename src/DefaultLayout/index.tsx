import React from 'react'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export default function DefaultLayouts() {
  return (
    <>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
