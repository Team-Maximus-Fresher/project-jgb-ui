import React , {useState} from 'react';
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
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    headText: {
        fontWeight: "700"
    },
    table: {
        width: "100%"
    }
  });

  
function getStatusColor(inp){
    var statusColor;
    switch(inp){
        case "FINISHED" : statusColor = "green" ; break;
        case "COMPLETE" : statusColor = "green" ; break;
        case "NEW" : statusColor = "orange" ; break;
        case "REJECT" : statusColor = "red" ; break;
        case "TRIGGERED" : statusColor = "grey" ; break;
    }
    return statusColor;
}


function ApplicationCard(props) {
    const classes = useStyles();
          
    var handleStepState = (e , input) => {
        e.preventDefault()
        if(input === props.selectedStep.stepId && props.data.applicationReferenceId === props.selectedStep.applicationID){
            props.setSelectedStep({})
        } 
        else{
            props.setSelectedStep(
                {
                    ...props.selectedStep,
                    applicationID : props.data.applicationReferenceId,
                    stepId : input
                }
            )}
        }

    return (
        <div className={classes.root}>
             <Card>
                <CardContent>
                    <Grid container>
                        <Grid item md={6} >
                            <Typography component="h5" align="justify">
                            Application Reference ID : <span className={classes.headText}>{props.data.applicationReferenceId}</span>{/* <br />
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
                    <Grid container>
                        <Grid item md={12} sm={12} >
                        <TableContainer className={classes.table}>
                            <Table >
                                <TableBody >
                                <TableRow >
                                <ul id="breadcrumb" > 
                                {
                                    props.data.applicationStateLogs.map(stateLog =>{
                                        return (
                                            <td>
                                                <li>
                                                    <a 
                                                    style={{color : getStatusColor(stateLog.status)}} 
                                                    onClick={e =>{handleStepState(e , stateLog._id)}} 
                                                    href="#"
                                                    >
                                                    {

                                                    stateLog._id
                                                    }
                                                    </a>
                                                </li>
                                            </td>
                                        )
                                    })
                                }
                                </ul>
                                </TableRow>
                                </TableBody>
                                </Table>
                        </TableContainer>
                        <TableContainer className={classes.table}>
                        <Table >
                        <TableBody>
                        <TableRow>
                            {
                                props.data.applicationStateLogs.map( step => {
                                    return (          
                            <Collapse in={props.selectedStep.stepId === step._id && props.data.applicationReferenceId === props.selectedStep.applicationID}>
                            <Paper elevation={4} className={classes.paper}>
                            <Grid item md={12} sm={12}>
                                <TableContainer className={classes.table} >
                                <Table >
                                    <TableBody >
                                        {
                                            step._id === props.selectedStep.stepId && props.data.applicationReferenceId === props.selectedStep.applicationID /* && step.input !== undefined */?
                                            Object.keys(step).map(function (keyName, keyIndex) {
                                                console.log(step[keyName])
                                                return (
                                                    <TableRow>
                                                        <TableCell>{keyName}</TableCell>
                                                        <TableCell>{JSON.stringify(step[keyName])}</TableCell> 
                                                    </TableRow>
                                                )
                                            })
                                            : <></>
                                        }
                                    </TableBody>
                                </Table>
                                </TableContainer>
                            </Grid>
                            </Paper>
                            </Collapse>
                            )})
                            }
                            </TableRow>
                            </TableBody>
                            </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        {/* </AccordionDetails>
        </Accordion> */}
        </div>
    );
}

export default ApplicationCard;