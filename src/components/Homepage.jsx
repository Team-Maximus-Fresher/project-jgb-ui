import React , {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';


function Homepage(props) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <Container fixed>
                <Grid item md={6} style={{border : "2px solid black"}}>
                    <h2>Hello</h2>
                </Grid>
            </Container>
        </div>
    );
}

export default Homepage;