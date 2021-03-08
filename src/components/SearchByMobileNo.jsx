import React , {useState} from 'react';
import { Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputCard from './InputCard';
import {setForm} from '../actions/FormAction';
import { connect } from 'react-redux';
import ApplicationDetails from './ApplicationDetails';
import { searchApplicationsByMobileNo } from '../fetchData/endpoints';
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

function SearchByMobileNo(props) {

    const [ pageName , setPageName] = useState("SearchByMobileNo");
    const classes = useStyles();
    const searchByMobileNoConfig = {
        title : "Search by Mobile Number",
        imageSrc : "https://miro.medium.com/max/1600/1*T5j7aqOF32G2eSR1HwnUvg.jpeg",
        inputLabel : "Enter Mobile Number",
        inputName : "id",
        productCodeOptions : ["PERSONAL"],
        redirection : {
            link : "/",
            text : "Search by Customer ID"
        } 
    }

    return (
        <div>
            {
            pageName === "SearchByMobileNo" ?
            <div className={classes.root}>
            <Container fixed>
            <Grid container>
                <Grid item md={12} className={classes.outerGrid} align="center">
                    <InputCard config={searchByMobileNoConfig} formHandle={props} stateControl={setPageName}/>
                </Grid>
            </Grid>
            </Container>
            </div>
            :
            <ApplicationDetails endpointConfig={searchApplicationsByMobileNo}/>
            }
            
        </div>
    );
}

const mapStatetoProps = state => ({})

export default connect(mapStatetoProps, { setForm })(SearchByMobileNo);
/* export default SearchByMobileNo; */