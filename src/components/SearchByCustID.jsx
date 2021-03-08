import React , {useState} from 'react';
import { Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputCard from './InputCard';
import {setForm} from '../actions/FormAction';
import { connect } from 'react-redux';
import ApplicationDetails from './ApplicationDetails';
import { searchApplicationsByCustId } from '../fetchData/endpoints';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    outerGrid: {
        marginTop : "20px"
    }
}));

function SearchByCustID(props) {
    const [ pageName , setPageName] = useState("SearchByCustID");
    const classes = useStyles();
    const searchByCustIdConfig = {
        title : "Search by Customer ID",
        imageSrc : "https://miro.medium.com/max/1600/1*T5j7aqOF32G2eSR1HwnUvg.jpeg",
        inputLabel : "Enter Customer ID",
        inputName : "id",
        productCodeOptions : ["PERSONAL"],
        redirection : {
            link : "/mobile",
            text : "Search by mobile number"
        } 
    }

    return (
        <div>
            {
            pageName === "SearchByCustID" ?
            <div className={classes.root}>
            <Container fixed>
            <Grid container>
                <Grid item md={12} className={classes.outerGrid} align="center">
                    <InputCard config={searchByCustIdConfig} formHandle={props} stateControl={setPageName}/>
                </Grid>
            </Grid>
            </Container>
            </div>
            :
            <ApplicationDetails endpointConfig={searchApplicationsByCustId}/>
            }
        </div>
    );
}

const mapStatetoProps = state => ({})

export default connect(mapStatetoProps, { setForm })(SearchByCustID);
/* export default SearchByCustID; */