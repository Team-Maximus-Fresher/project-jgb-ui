import React , {useState} from 'react';
import { Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ApplicationCard from './ApplicationCard';
import { searchApplicationsByCustId } from '../fetchData/endpoints';
import store from '../store'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    outerGrid: {
       /*  border : "2px solid black" */
    },
    boxStyle : {
        minHeight : "500px",
        marginTop : "5px",
    },
    innerGrid : {
        margin : "2%"
    }
}));

function ApplicationDetails(props) {
    const formData = store.getState().form 
    if(formData.custID === undefined){
        props.stateControl("homepage")
    }
    const prop = searchApplicationsByCustId(formData.custID)
    /* const prop = searchApplicationsByCustId(840000016) */
    /* const [count, setCount] = useState(0); */
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
            <Container fixed>
            <Grid container className={classes.boxStyle}>
                <Grid item md={12} className={classes.outerGrid}>
                {
                        prop.map(applicationData =>{
                            return (
                                <Grid item md={12} className={classes.innerGrid}>
                                    <ApplicationCard data={applicationData}/>
                                </Grid>
                            )
                        })
                }
                </Grid>
            </Grid>
            </Container>
            </div>
        </div>
    );
}

export default ApplicationDetails;