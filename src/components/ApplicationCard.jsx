import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../assets/css/ApplicationDetails.css'
import { Box, Container, Paper ,Card , CardContent , Typography, Grid} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    headText: {
        fontWeight: "700"
    },
    table: {
        width: "100%",
        border : ""
    }
  });

function getStatusColor(inp){
    var statusColor;
    switch(inp){
        case "FINISHED" : statusColor = "green" ; break;
        case "COMPLETE" : statusColor = "green" ; break;
        case "NEW" : statusColor = "orange" ; break;
        case "REJECT" : statusColor = "red" ; break;
    }
    return statusColor;
}

function ApplicationCard(props) {
    console.log(props.data)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3 align="left">Showing results...</h3>

{/*             <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography component="h5">Application 1 : {props.data.applicationReferenceId}</Typography>
                </AccordionSummary>
                <AccordionDetails> */}
    
             <Card /* style={{borderTop : "10px solid " +  getStatusColor(props.data.state)}} */>
                <CardContent>
                    <Grid container>
                        <Grid item md={4}>
                            <Typography component="h5" align="justify">
                           {/*  Application Reference ID : <span className={classes.headText}>{props.data.applicationReferenceId}</span>  */}{/* <br />
                            Product Code : <span className={classes.headText}>{props.data.productCode}</span> <br /> */}
                            </Typography>
                        </Grid>
                        {/* <Grid item md={4}>
                            <Typography component="h5" align="justify">
                            Customer ID : <span className={classes.headText}>{props.data.customerId}</span> <br />
                            Customer Type : <span className={classes.headText}>{props.data.customerType}</span> <br />
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography component="h5" align="justify">
                            Application Date : <span className={classes.headText}>{props.data.applicationDate}</span> <br />
                            Journey Code : <span className={classes.headText}>{props.data.journeyCode}</span> <br />
                            </Typography>
                        </Grid> */}
                    </Grid>
                        <TableContainer component={Paper}>
                            <Table className={classes.table}>
                                <TableBody>
                                <TableRow>
                                <div id="crumbs" >
                                    <ul>
                                        {
                                            props.data.applicationStateLogs.map(stateLog =>{
                                                return (
                                                    <td><li><a href="#" style={{color : getStatusColor(stateLog.status)}}>{stateLog._id}</a></li></td>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                </TableRow>
                                </TableBody>
                                </Table>
                        </TableContainer>
                </CardContent>
            </Card>
        {/* </AccordionDetails>
        </Accordion> */}
        </div>
    );
}

export default ApplicationCard;