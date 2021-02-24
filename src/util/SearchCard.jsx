import React from 'react';

function SearchCard(props) {
    return (
        <div>
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
        </div>
    );
}

export default SearchCard;