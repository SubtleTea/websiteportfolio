import React, { Component } from "react";
import { Box, Grid } from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <div>
                <Grid container direction="column" justify="flex-start" alignItem="stretch" spacing={2}>
                    <Grid item>
                        <Box className="contentbox">
                            <h2>FULLSTACK ENGINEER</h2>
                            <p>i plonk on a keyboard and sometimes programs come out</p>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className="contentbox">
                            <h2>PLONK PLONK PLONK</h2>
                            <p>this isn't one of those times though</p>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className="contentbox">
                            <h2>I WENT TO SCHOOL ONCE</h2>
                            <p>it was so bad i left</p>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className="contentbox">
                            <h2>AlSO I HAVE HAD A JOB OR SOMETHING</h2>
                            <p>it's not something to bring up in polite conversation</p>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Home;