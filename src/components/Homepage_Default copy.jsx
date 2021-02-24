import React , {useState} from 'react';
import { Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
/* import { spacing } from '@material-ui/system';
import { borders } from '@material-ui/system'; */


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gridBorder: {
        border : "2px solid black"
    }
}));

function Homepage(props) {

    const [count, setCount] = useState(0);
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
            <Container fixed>
            <Grid container>
                <Grid item md={8} className={classes.gridBorder}>
                <h2>Hey</h2>
                </Grid>
                <Grid item md={4}>
                <h2>Hey</h2>
                </Grid>
                <Grid item md={6}>
                <h2>Hey</h2>
                </Grid>
                <Grid item md={6}>
                <h2>Hey</h2>
                </Grid>
            </Grid>
            </Container>
            </div>
        </div>
    );
}

export default Homepage;