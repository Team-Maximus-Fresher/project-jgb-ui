import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { pink } from '@material-ui/core/colors';
import {
  fade,
  ThemeProvider,
  withStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  formRoot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
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
}));

const theme = createMuiTheme({
  palette: {
    primary: pink,
  },
});

export default function HomePageCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      {/* <CardHeader
        title={props.config.title}
      /> */}
        {/* <CardMedia
        className={classes.media}
        image={props.config.imageSrc}
      /> */}
      {/* <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}

      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent>
          <h2>{props.config.title}</h2>
        <Container /* fixed */ maxWidth="xs">
        <form className={classes.formRoot} autoComplete="off"
        onSubmit = {
            (e) =>{
               e.preventDefault();
               props.stateControl("applicationdetails");
            }
        }
        >
                <ThemeProvider theme={theme}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField 
                        color = "#ae275f"
                        value={props.formHandle[props.config.inputName]}
                        onChange={
                            (e) =>{
                                props.formHandle.setForm(props.config.inputName , e.target.value)
                            }
                        }
                        id="filled-basic" label={props.config.inputLabel} variant="filled" className={classes.formControl} required={true}/>
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl variant="filled" className={classes.formControl} required>
                        <InputLabel id="demo-simple-select-filled-label">Product Code</InputLabel>
                        <Select
                        required={true}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={props.formHandle["productCode"]}
                        onChange={
                            (e) =>{
                                props.formHandle.setForm("productCode" , e.target.value)
                            }
                        }
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {props.config.productCodeOptions.map(option =>{
                            return(
                              <MenuItem value={option}>{option}</MenuItem>
                            )
                        })}
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="contained" className={classes.formControl} type="submit" style={{backgroundColor : "#ae275f" , color : "white"}}>
                        SUBMIT
                    </Button>
                    </Grid>
                    {
                      props.config.redirection !== undefined ?
                      <Grid item xs={12}>
                        <a href={props.config.redirection.link}>{props.config.redirection.text}</a>
                      </Grid>
                      :
                      <></>
                    }
                </Grid>
                </ThemeProvider>
        </form>
        </Container>
        </CardContent>
      {/* </Collapse> */}
    </Card>
  );
}
