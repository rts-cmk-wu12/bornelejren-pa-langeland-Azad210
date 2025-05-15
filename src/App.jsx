import { useState } from 'react'
import routes from '~react-pages'
import {useRoutes } from 'react-router'

function App() {



  return (
    <>
   {useRoutes(routes)}
    </>
  )
}

export default App
