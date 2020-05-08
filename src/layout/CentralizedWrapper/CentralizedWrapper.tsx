import React from 'react'
import { Grid } from '@material-ui/core'

interface IProps { 
    children: React.ReactNode | React.ReactNode[]
}

const CentralizedWrapper: React.FC<IProps> = ({ children }: IProps) => {
    return (
        <Grid container justify="center" xs={12}>
            {children}
        </Grid>
    )
}

export default CentralizedWrapper
