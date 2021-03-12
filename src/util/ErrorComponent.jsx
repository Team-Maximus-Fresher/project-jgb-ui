import React from 'react';
import Link from '@material-ui/core/Link';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paperComponent: {
      position : "relative",
      left : "40%",
      top : "100px",
     /*  height : "300px", */
      width : "350px",
      padding : "5px"
    },
    table : {
        border : "2px solid grey"
    }
}));

const ErrorComponent = (props) => {
    
    console.log(props)
    const classes = useStyles();

    return (
        <div>
             <Paper className={classes.paperComponent} elevation={3} >
                <ReportProblemIcon style={{fontSize : "100px"}} />
             <table align="center">
                {
                    Object.keys(props.data).map(info => {
                        return (
                            <tr key={info}>
                                {/* <th>{info}</th> */}
                                <th>{props.data[info]}</th>
                            </tr>
                        )
                    })
                }
             </table>
             <Link href="/">CLICK HERE TO GO BACK</Link>
             </Paper>
        </div>
    );
};

export default ErrorComponent;