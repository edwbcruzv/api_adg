import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { Avatar, Grid } from '@mui/material'





const Menu = () => {
    
  return (
    <AppBar position="static" style={{ backgroundColor :"#C823E6"}}>
      <Toolbar>
        <Box sx={{
                marginLeft:1,
                marginRight:3}}>
         {/* puede ir un logo */}
        </Box>
        
        <MenuItem >
          <LinkRouter
              to="/" 
              style={{textDecoration:"none",color:"black" }}
              >
                Inicio 
          </LinkRouter>
        </MenuItem>

        <MenuItem>
          <LinkRouter
              to="/mapas" 
              style={{textDecoration:"none",color:"black" }}
              >
                Mapas
          </LinkRouter>
        </MenuItem>

        <MenuItem>
          <LinkRouter
              to="/estadisticas" 
              style={{textDecoration:"none",color:"black" }}
              >
                Estadisticas
          </LinkRouter>
        </MenuItem>

        <MenuItem>
          <LinkRouter
              to="/resultados" 
              style={{textDecoration:"none",color:"black" }}
              >
                Resultados
          </LinkRouter>
        </MenuItem>
        
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          wrap="wrap"
          
        >
        <Avatar alt="Logo CIC" 
            src="/images/logo.png"
            sx={{width:150,height:60}}
            variant='rounded'
            />
          
        </Grid>

      </Toolbar>
    </AppBar>
  )
}

export default Menu