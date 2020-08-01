import React, { Component } from "react";
import { Box, Grid } from '@material-ui/core';
import Main from './main';

class Home extends Component {
    render() {
        return (
            <div id="section1">
                <Main />;
                <Grid container direction="column" justify="flex-start" alignItem="stretch" spacing={2}>
                    <Grid item>
                        <Box className="contentbox">
                            <h2>This is a website built from scratch using React</h2>
                            <p>It is a work in progress</p>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className="contentbox">
                            <h2>BE SURE TO LIKE AND SUBSCRIBE</h2>
                            <p>follow me on instagram</p>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Home;