import React , {useState} from 'react';
import { Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomePageCard from './HomePageCard';
import {setForm} from '../actions/FormAction';
import { connect } from 'react-redux';
import ApplicationDetails from './ApplicationDetails';
/* import { spacing } from '@material-ui/system';
import { borders } from '@material-ui/system'; */


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    outerGrid: {
        marginTop : "20px"
    }
}));

function Homepage(props) {

    const [ pageName , setPageName] = useState("homepage");
    const classes = useStyles();
    const searchByCustIdConfig = {
        title : "Search by Customer ID",
        imageSrc : "https://miro.medium.com/max/1600/1*T5j7aqOF32G2eSR1HwnUvg.jpeg",
        inputLabel : "Enter Customer ID",
        inputName : "custID"
    }

    return (
        <div>
            {
            pageName === "homepage" ?
            <div className={classes.root}>
            <Container fixed>
            <Grid container>
                <Grid item md={12} className={classes.outerGrid} align="center">
                    <HomePageCard config={searchByCustIdConfig} formHandle={props} stateControl={setPageName}/>
                </Grid>
            </Grid>
            </Container>
            </div>
            :
            <ApplicationDetails formData={props} /* stateControl={setPageName} *//>
            }
            
        </div>
    );
}

const mapStatetoProps = state => ({})

export default connect(mapStatetoProps, { setForm })(Homepage);
/* export default Homepage; */