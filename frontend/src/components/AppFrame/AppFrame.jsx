import React from 'react'
import {Grid,Box,Paper} from '@mui/material'
import Menu from '../Menu'


const AppFrame = ({children}) => {
  return (
    <Box sx={{border:0}}>
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="strech"
    >
      <Grid item >
            <Menu/>
      </Grid>
      <Grid item >
      <Box sx={{border:0}}>
        <Paper elevation={3}>{children}</Paper>
            
      </Box>
      </Grid>
    </Grid>
    </Box>
  )
}

export default AppFrame