import React from 'react';
import { Grid } from '@material-ui/core';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <Grid 
      container
      justify="center"
      alignItems="center"
      alignContent="center"
      xs={12}
      md={8}
    >
      {children}
    </Grid>
  );
};

export default Layout;
