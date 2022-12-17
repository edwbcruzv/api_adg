import React from 'react'
import AppFrame from '../components/AppFrame/AppFrame'
import Grid from '@mui/material/Grid'
import Grafica from '../components/Grafica'
import GraficaLinea from '../components/GraficaLinea'
import useFetch from '../Hooks/useFetch'



const Estadisticas = () => {
  let url=" http://localhost:4000/estadisticas"
   const {Data,IsPending}=useFetch(url)
   console.log(Data)

   if(IsPending){

   }else{

     const Alcaldias=Object.keys(Data)
    const Info=Object.values(Data)
     console.log(Alcaldias)
     console.log(Info)
    }

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
        
        {
            IsPending?("Cargando"):
            ("Renderizado")
        }
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