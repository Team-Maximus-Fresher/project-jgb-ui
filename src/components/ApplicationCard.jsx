import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../assets/css/ApplicationDetails.css'
import { Card , CardContent , Typography, Grid} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
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
    var green = "green"
    switch(inp){
        case "FINISHED" : statusColor = green ; break;
        case "COMPLETE" : statusColor = green ; break;
        case "AUTO_APPROVED" : statusColor = green ; break;
        case "NEW" : statusColor = "orange" ; break;
        case "SUSPENDED" : statusColor = "red" ; break;
        case "REJECT" : statusColor = "red" ; break;
        case "TERMINATED" : statusColor = "red" ; break;
        case "TRIGGERED" : statusColor = "grey" ; break;
        case "SKIPPED" : statusColor = "grey" ; break;
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
             <Card style={{backgroundColor: "#EAF2F8" , border: "1px solid grey"}}>
                <CardContent>
                    <Grid container>
                        <Grid item lg={3} sm={6}>
                            <Typography component="h5" align="left">
                            Application Reference ID : <span className={classes.headText}>{props.data.applicationReferenceId}</span>
                            </Typography>
                        </Grid>
                        <Grid item lg={3} sm={6}>
                            <Typography component="h5" align="left">
                            Application Date : <span className={classes.headText}>{props.data.applicationDate}</span>
                            </Typography>
                        </Grid>
                        <Grid item lg={3} sm={6}>
                            <Typography component="h5" align="left">
                            State : <span className={classes.headText}>{props.data.state}</span>
                            </Typography>
                        </Grid>
                        <Grid item lg={3} sm={6}>
                            <Typography component="h5" align="left">
                            Journey Code : <span className={classes.headText}>{props.data.journeyCode}</span>
                            </Typography>
                        </Grid>
                        <Grid item md={12} sm={12} >
                            <TableContainer className={classes.table} align="left">
                                <Table >
                                <TableBody >
                                <TableRow >
                                {/* <div class="center">
                                <div class="breadcrumb-holder">
                                    <ul class="underlined-breadcrumbs">
                                {
                                    props.data.applicationStateLogs.map(stateLog =>{
                                        var selectedFlagColor = {}
                                        if(props.selectedStep.stepId === stateLog.id && props.data.applicationReferenceId === props.selectedStep.applicationID)
                                        {
                                            selectedFlagColor = {"fontWeight" : 700}
                                        }
                                        return (
                                            <td>
                                                <li>
                                                    <a 
                                                    style={{backgroundColor : getStatusColor(stateLog.stepStatus) , ...selectedFlagColor}} 
                                                    onClick={e =>{handleStepState(e , stateLog.id)}} 
                                                    href="#"
                                                    >
                                                     {stateLog.id}
                                                    </a>
                                                </li>
                                                
                                            </td>
                                        )
                                    })
                                }
                                </ul>
                                    </div>
                                </div> */}
                                <ul id="breadcrumb"> 
                                {
                                    props.data.applicationStateLogs.map(stateLog =>{
                                        var selectedFlagColor = {}
                                        if(props.selectedStep.stepId === stateLog.id && props.data.applicationReferenceId === props.selectedStep.applicationID)
                                        {
                                            selectedFlagColor = {"fontWeight" : 700}
                                        }
                                        return (
                                            <td>
                                                <li>
                                                    <a 
                                                    style={{color : getStatusColor(stateLog.stepStatus) , ...selectedFlagColor}} 
                                                    onClick={e =>{handleStepState(e , stateLog.id)}} 
                                                    href="#"
                                                    >
                                                     {stateLog.id}
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
                            </Grid>
                        <Grid item md={12} sm={12}>
                        {
                            props.data.applicationStateLogs.map( step => {
                                const {id , stepStatus , ...others} = step
                            return (          
                            <Collapse in={props.selectedStep.stepId === step.id && props.data.applicationReferenceId === props.selectedStep.applicationID}>
                            <Grid container>
                            {
                                step.id === props.selectedStep.stepId && props.data.applicationReferenceId === props.selectedStep.applicationID ?
                                Object.keys(others).map(function (keyName, i) {
                                    return (
                                           Array.isArray(step[keyName]) ?
                                           <>
                                            {
                                              step[keyName].map(innerData => {
                                                  return (
                                                    <Grid item md={3} sm={6} xs={12} style={{padding : "2px" , border : "1px solid lightgrey" , marginTop : "0.5px"}}>
                                                    <Typography variant="p" component="p">
                                                    {
                                                        Object.keys(innerData).map(innerDataContent => {
                                                            return (
                                                                    <span> {innerDataContent} : <b>{innerData[innerDataContent]}</b> <br /></span> 
                                                            )
                                                        })
                                                    }
                                                  </Typography>
                                                  </Grid>
                                              )})
                                            }
                                           </>
                                           :
                                           <Grid item md={3} sm={6} xs={12} style={{padding : "2px" , border : "1px solid lightgrey" , marginTop : "0.5px"}}>
                                           <Typography variant="p" component="p">
                                               {keyName} : <b>{step[keyName]}</b>
                                           </Typography>
                                           </Grid>
                                    )
                                })
                                : <></>
                            }
                            </Grid>
                            </Collapse>
                            )})
                        }
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            
        </div>
    );
}

export default ApplicationCard;