import React from 'react'
import AppFrame from '../components/AppFrame/AppFrame'
import GraficaPolar from '../components/GraficaPolar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {Box} from '@mui/material'
import useFetch from '../Hooks/useFetch'

const Resultados = () => {
  let url=" http://localhost:4000/resultados"
   const {Data,IsPending,Error}=useFetch(url)
   console.log(Data)
  return (
    <AppFrame>
      <Grid container 
    direction="row"
    justifyContent="space-around"
    alignItems="stretch">
      <Grid item>
      <Box sx={{border:1}}>
        <GraficaPolar/>
        </Box>

      </Grid>

      <Grid item>
        <Box sx={{border:1}}>
        <Typography variant="body1" color="initial">Se supone que aqui va una descripcion</Typography>
        </Box>
      </Grid>
    </Grid>
    </AppFrame>
  )
}

export default Resultados