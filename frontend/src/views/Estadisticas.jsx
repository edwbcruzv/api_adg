import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AppFrame from '../components/AppFrame/AppFrame'
import Grid from '@mui/material/Grid'
import Grafica from '../components/Grafica'
import GraficaLinea from '../components/GraficaLinea'
import useFetch from '../Hooks/useFetch'
import {faker} from '@faker-js/faker';


const Estadisticas = () => {
  let url=" http://localhost:4000/estadisticas"
   const {Data,IsPending,Error}=useFetch(url)
   console.log(Data)

  return (
    <AppFrame>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="stretch"
        wrap="wrap"
      >
        <Grid item>
          <Grafica />
        </Grid>

        <Grid item>
          <Grafica data/>
        </Grid>
        
        <Grid item>
          <GraficaLinea/>
        </Grid>

        <Grid item>
          <GraficaLinea/>
        </Grid>

        
        
      </Grid>
    </AppFrame>
  )
}

export default Estadisticas