import React from 'react'
import AppFrame from '../components/AppFrame/AppFrame'
import Mapa2 from '../components/Mapa2'
import Grid from '@mui/material/Grid'
import Descripcion from '../components/Descripcion/Descripcion'
import useFetch from '../Hooks/useFetch'

const Mapas = () => {
  let url=" http://localhost:4000/mapas"
   const {Data,IsPending,Error}=useFetch(url)
   console.log(Data)
  return (
    <AppFrame>
      <Grid container spacing={1}>
        <Mapa2/>
        <Descripcion/>
      </Grid>
    </AppFrame>
  )
}

export default Mapas