import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey, red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: grey[100],
    flexGrow: 1,
    margin: theme.spacing(8),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  formRoot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const products = [
  {
    value: 'PERSONAL',
    label: 'PERSONAL',
  },
  {
    value: 'HOME-LOAN',
    label: 'HOME-LOAN',
  },
];

export default function HomePage(props) {
  const classes = useStyles();
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [product, setProductCode] = React.useState('AWB');
  const [application, setApplicationCode] = React.useState('AWB');

  const handleChange = (event) => {
    setProductCode(event.target.value);
    //setCustomerId(event.target.value);
  };

  const handleChangeApp = (event) => {
    setApplicationCode(event.target.value);
  };

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <div>
    <Container fixed>
      <CssBaseline/>
       <Grid container spacing= {3} >
      <Card className={classes.root}>
        <CardHeader title="" />
        <Image src="https://miro.medium.com/max/1600/1*T5j7aqOF32G2eSR1HwnUvg.jpeg"></Image>
        <CardContent>
          <Typography variant="h6" color="textPrimary" component="p">
            Search By Customer Id
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded1,
            })}
            onClick={handleExpandClick1}
            aria-expanded={expanded1}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
          <CardContent>
              <form className={classes.formRoot} noValidate autoComplete="off">
                <TextField id="filled-basic" label="Enter Customer ID" variant="filled" />
                <TextField
                    id="filled-select-currency-native"
                    select
                    label="Select Product Code"
                    value={product}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select ProductCode"
                    variant="filled">
                        {products.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                  </TextField>
                  <Button color="primary" variant="contained">
                    Submit
                  </Button>
              </form>
          </CardContent>
        </Collapse>
      </Card>
      <Divider/>

      <Card className={classes.root}>
        <CardHeader
          title=""
        />
         <Image src="https://i.pinimg.com/474x/ef/bb/54/efbb54d31f5ae7c4cd4b24bfd05a5f77.jpg"></Image>
        <CardContent>
          <Typography variant="h6" color="textPrimary" component="p">
            Search By Application Id
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded2,
            })}
            onClick={handleExpandClick2}
            aria-expanded={expanded2}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
          <CardContent>
              <form className={classes.formRoot} noValidate autoComplete="off">
                <TextField id="filled-basic" label="Enter Application ID" variant="filled" />
                <TextField
                    select
                    label="Select Product Code"
                    value={product}
                    onChange={handleChangeApp}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select ApplicationCode"
                    variant="filled">
                        {products.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                  </TextField>
                  <Button color="primary" variant="contained">
                      Submit
                  </Button>
              </form>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
    </Container>
    </div>
  );
}


























// /* import React, { useEffect, useState } from "react";
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Avatar from '@material-ui/core/Avatar';
// import { red } from '@material-ui/core/colors';
// import CardHeader from "@material-ui/core/CardHeader"

// const useStyles = makeStyles((theme) => 
// ({
//     root: {
//         minWidth: 300,
//     },
//     large: {
//         width: theme.spacing(7),
//         height: theme.spacing(7),
//       },
//       avatar: {
//           backgroundColor: red[500],
//       },
//       media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//       },
// }))

// function Homepage() {
//     const classes = useStyles();
//     return (
//         <div>
//             <Container fixed>
//                 <Typography
//                         color="textPrimary"
//                         variant="h2"
//                         align="center">
//                             Landing Page
//                 </Typography>
//             <Grid container spacing={3}>
//                     <Card className={classes.root}>
//                     <CardContent>
//                             <Typography variant="body2" color="textSecondary" component="p">
//                                 This impressive paella is a perfect party dish and a fun meal to cook together with your
//                                 guests. Add 1 cup of frozen peas along with the mussels, if you like.
//                             </Typography>
//                     </CardContent>
//                     </Card>
//                     <Card className={classes.root}>
//                     <CardContent>
//                             <Typography variant="body2" color="textSecondary" component="p">
//                                 This impressive paella is a perfect party dish and a fun meal to cook together with your
//                                 guests. Add 1 cup of frozen peas along with the mussels, if you like.
//                             </Typography>
//                     </CardContent>
//                     </Card>
//                     <Card className={classes.root}>
//                     <CardContent>
//                             <Typography variant="body2" color="textSecondary" component="p">
//                                 This impressive paella is a perfect party dish and a fun meal to cook together with your
//                                 guests. Add 1 cup of frozen peas along with the mussels, if you like.
//                             </Typography>
//                     </CardContent>
//                     </Card>
//                 </Grid>
//             </Container>
//         </div>
//     );
// }

// export default Homepage; */