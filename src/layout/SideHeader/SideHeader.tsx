import React from 'react';
import { Grid, Typography } from '@material-ui/core';


const SideHeader = () => {
  return (
    <Grid 
      container 
      justify="center"
      style={{ backgroundColor: '#0069fe', textAlign: 'center', color: 'white' }}
      xs={12} 
      md={4}
      alignItems="center"
    >
      <Typography variant="h2">
        Welcome to Todo list.
      </Typography>
    </Grid>
  )
};

export default SideHeader;
