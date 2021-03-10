import React , {useState} from 'react';
import { Box, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputCard from './InputCard';
import {setForm} from '../actions/FormAction';
import { connect } from 'react-redux';
import ApplicationDetails from './ApplicationDetails';
import { searchApplicationsByCustId , searchApplicationsByMobileNo } from '../fetchData/endpoints';


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
    const [ homepageConfig , setHomepageConfig] = useState("searchByCustIdConfig");
    const classes = useStyles();

    const searchByCustIdConfig = {
        title : "Search by Customer ID",
        inputLabel : "Enter Customer ID",
        inputName : "id",
        productCodeOptions : ["PERSONAL","FOUR_WHEELER_PERSONAL"],
        endPoint : searchApplicationsByCustId,
        redirection : {
            config : "searchByMobileNoConfig",
            text : "Search by mobile number"
        } 
    }

    const searchByMobileNoConfig = {
        title : "Search by Mobile Number",
        inputLabel : "Enter Mobile Number",
        inputName : "id",
        productCodeOptions : ["PERSONAL","FOUR_WHEELER_PERSONAL"],
        endPoint : searchApplicationsByMobileNo,
        redirection : {
            config : "searchByCustIdConfig",
            text : "Search by Customer ID"
        } 
    }

    const getHomepageConfig = ()=>{
        return eval(homepageConfig)
    }

    return (
        <div>
            {
            pageName === "homepage" ?
            <div className={classes.root}>
            <Container fixed>
            <Grid container>
                <Grid item md={12} className={classes.outerGrid} align="center">
                    <InputCard 
                    config={getHomepageConfig()} 
                    formHandle={props} 
                    stateControl={{
                        "setPageName" : setPageName,
                        "setHomepageConfig" : setHomepageConfig
                    }}/>
                </Grid>
            </Grid>
            </Container>
            </div>
            :
            <ApplicationDetails endpointConfig={getHomepageConfig().endPoint}/>
            }
        </div>
    );
}

const mapStatetoProps = state => ({})

export default connect(mapStatetoProps, { setForm })(Homepage);
/* export default Homepage; */