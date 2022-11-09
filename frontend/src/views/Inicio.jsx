import React from 'react'
import AppFrame from '../components/AppFrame/AppFrame'
import Mapa1 from '../components/Mapa1'
import Grid from '@mui/material/Grid'
import useFetch from '../Hooks/useFetch'

const Inicio = () => {
   let url=" http://localhost:4000/"
   const {Data,IsPending,Error}=useFetch(url)
   console.log(Data)
  return (
    <AppFrame>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Mapa1  />
        </Grid>
    </AppFrame>
  )
}

export default Inicio