import * as React from 'react';
import { createStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { Header } from './components/header';
import { AddTodo } from './components/add-todo';

const styles = createStyles({
  root: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

interface Props {
  classes: {
    root: string
  }
}

export const App = withStyles(styles)(({ classes }: Props) => (
  <CssBaseline>
    <Grid container className={classes.root}>
      <Header />
      <Grid item xs={12} sm={9} md={6} lg={3}>
        <AddTodo />
      </Grid>
    </Grid>
  </CssBaseline>
));
